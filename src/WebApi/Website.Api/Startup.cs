using System;
using System.IO;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
            services.AddControllers();

            // Settings
            services.Configure<ApplicationSettings>(_configuration.GetSection("AppSettings"));
            services.Configure<ReCaptchaSettings>(_configuration.GetSection("Recaptcha"));

            var jwtSettingsSection = _configuration.GetSection("JwtSettings");
            services.Configure<JwtSettings>(jwtSettingsSection);
            var jwtSettings = jwtSettingsSection.Get<JwtSettings>();

            // JWT authentication
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters
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

            // Configure database connection
            services.AddBusinessServices(options =>
                options.UseSqlServer(_configuration.GetConnectionString("DefaultConnection"))
            );

            services.AddApiServices();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app)
        {
            if (_environment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
                app.UseHttpsRedirection();
            }

            // Client
            app.UseStaticFiles();
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

            // Api
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
