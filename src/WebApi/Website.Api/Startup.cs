﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Website.Api;
using Website.Api.ReCaptcha;
using Website.Business;
using Website.Business.Settings;

namespace Mt.Website.Api
{
    public class Startup
    {
        private IConfiguration _configuration { get; }
        private IWebHostEnvironment _environment { get; }


        public Startup(IConfiguration configuration, IWebHostEnvironment environment)
        {
            _configuration = configuration;
            _environment = environment;
        }


        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Settings
            services.Configure<ApplicationSettings>(_configuration.GetSection("AppSettings"));
            services.Configure<ReCaptchaSettings>(_configuration.GetSection("Recaptcha"));

            var jwtSettingsSection = _configuration.GetSection("JwtSettings");
            services.Configure<JwtSettings>(jwtSettingsSection);
            var jwtSettings = jwtSettingsSection.Get<JwtSettings>();

            var azureAdSettingsSection = _configuration.GetSection("AzureAdSettings");
            services.Configure<AzureAdSettings>(azureAdSettingsSection);
            var azureAdSettings = azureAdSettingsSection.Get<AzureAdSettings>();

            var authenticationSchemes = new List<string> { JwtBearerDefaults.AuthenticationScheme };

            var authentication = services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                options.RequireHttpsMetadata = false;
                options.SaveToken = true;
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(
                        Encoding.ASCII.GetBytes(jwtSettings.Key)),
                    ValidateIssuer = false,
                    ValidIssuer = jwtSettings.Issuer,
                    ValidateAudience = false,
                    ValidAudience = jwtSettings.Audience,
                    ValidateLifetime = true,
                    ClockSkew = TimeSpan.FromMinutes(jwtSettings.MinutesToExpiration)
                };
            });

            if (azureAdSettings.IsEnabled)
            {
                authenticationSchemes.Add("AzureAD");
                authentication.AddJwtBearer("AzureAD", options =>
                    {
                        var authority = $"https://sts.windows.net/{azureAdSettings.TenantId}/";

                        options.Authority = authority;
                        options.Audience = azureAdSettings.ClientId;
                        options.TokenValidationParameters = new TokenValidationParameters
                        {
                            ValidateIssuerSigningKey = true,
                            IssuerSigningKey = new SymmetricSecurityKey(
                                Encoding.ASCII.GetBytes(azureAdSettings.ClientSecret)),
                            ValidateIssuer = true,
                            ValidIssuer = authority,
                            ValidateAudience = false,
                            ValidAudience = azureAdSettings.ClientId,
                            ValidateLifetime = true
                        };
                    });
            }

            // Configure database connection
            services.AddBusinessServices(options =>
                options.UseSqlServer(_configuration.GetConnectionString("DefaultConnection"))
            );

            // API
            services.AddControllers(o =>
            {
                var policy = new AuthorizationPolicyBuilder(authenticationSchemes.ToArray())
                    .RequireAuthenticatedUser()
                    .Build();
                o.Filters.Add(new AuthorizeFilter(policy));
            });

            services.AddApiServices();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app)
        {
            int cachePeriod;
            if (_environment.IsDevelopment())
            {
                cachePeriod = 600;
                app.UseDeveloperExceptionPage();
            }
            else
            {
                cachePeriod = 604800;
                app.UseHsts();
                app.UseHttpsRedirection();
            }

            // Client
            app.UseStaticFiles(new StaticFileOptions
            {
                OnPrepareResponse = ctx =>
                {
                    ctx.Context.Response.Headers.Append("Cache-Control", $"public, max-age={cachePeriod}");
                }
            });
            // In development (debug) client will use another port
#if !DEBUG
            app.MapWhen(
                context => !context.Request.Path.StartsWithSegments("/api"),
                HandleSpa
            );
#endif
            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            // API
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }


        private void HandleSpa(IApplicationBuilder app)
        {
            app.Run(async (context) =>
            {
                context.Response.ContentType = "text/html";
                await context.Response.SendFileAsync(Path.Combine(_environment.WebRootPath, "index.html"));
            });
        }
    }
}
