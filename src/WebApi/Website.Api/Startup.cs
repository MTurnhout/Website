//-----------------------------------------------------------------------
// <copyright file="Startup.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Api
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using Microsoft.AspNetCore.Authentication.JwtBearer;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc.Authorization;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Hosting;
    using Microsoft.IdentityModel.Tokens;
    using Website.Api.ReCaptcha;
    using Website.Business;
    using Website.Business.Settings;
    using Website.Common.Database;

    /// <summary>
    /// A startup class used to setup the web host.
    /// </summary>
    public class Startup
    {
        private readonly IConfiguration configuration;
        private readonly IWebHostEnvironment environment;

        /// <summary>
        /// Initializes a new instance of the <see cref="Startup"/> class.
        /// </summary>
        /// <param name="configuration">A instance of <see cref="IConfiguration"/>.</param>
        /// <param name="environment">A instance of <see cref="IWebHostEnvironment"/>.</param>
        public Startup(IConfiguration configuration, IWebHostEnvironment environment)
        {
            this.configuration = configuration;
            this.environment = environment;
        }

        /// <summary>
        /// This method gets called by the runtime.
        /// Use this method to add services to the container.
        /// </summary>
        /// <param name="services">A instance of <see cref="IServiceCollection"/>.</param>
        public void ConfigureServices(IServiceCollection services)
        {
            // Settings
            services.Configure<ApplicationSettings>(this.configuration.GetSection("AppSettings"));
            services.Configure<ReCaptchaSettings>(this.configuration.GetSection("Recaptcha"));

            var jwtSettingsSection = this.configuration.GetSection("Jwt");
            services.Configure<JwtSettings>(jwtSettingsSection);
            var jwtSettings = jwtSettingsSection.Get<JwtSettings>();

            var azureAdSettingsSection = this.configuration.GetSection("AzureAd");
            services.Configure<AzureAdSettings>(azureAdSettingsSection);
            var azureAdSettings = azureAdSettingsSection.Get<AzureAdSettings>();

            var applicationInsightsSettingsSection = this.configuration.GetSection("ApplicationInsights");
            services.Configure<ApplicationInsightsSettings>(applicationInsightsSettingsSection);
            var applicationInsightsSettings = applicationInsightsSettingsSection.Get<ApplicationInsightsSettings>();

            // Application Insights
            if (!string.IsNullOrEmpty(applicationInsightsSettings.InstrumentationKey))
            {
                services.AddApplicationInsightsTelemetry(applicationInsightsSettings.InstrumentationKey);
            }

            // Authentication
            var authenticationSchemes = new List<string> { JwtBearerDefaults.AuthenticationScheme };

            var authentication = services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
#if DEBUG
                options.RequireHttpsMetadata = false;
#endif
                options.SaveToken = true;
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(
                        Encoding.ASCII.GetBytes(jwtSettings.Key)),
                    ValidateIssuer = true,
                    ValidIssuer = jwtSettings.Issuer,
                    ValidateAudience = true,
                    ValidAudience = jwtSettings.Audience,
                    ValidateLifetime = true,
                    ClockSkew = TimeSpan.FromMinutes(jwtSettings.MinutesToExpiration),
                };
            });

            if (azureAdSettings.IsEnabled && !string.IsNullOrEmpty(azureAdSettings.ClientSecret))
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
                            ValidateAudience = true,
                            ValidAudience = azureAdSettings.ClientId,
                            ValidateLifetime = true,
                        };
                    });
            }

            // Configure database connection
            services.AddBusinessServices(new DatabaseSettings
            {
                DatabaseType = DatabaseType.MsSql,
                ConnectionString = this.configuration.GetConnectionString("DefaultConnection"),
            });

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

        /// <summary>
        /// This method gets called by the runtime.
        /// Use this method to configure the HTTP request pipeline.
        /// </summary>
        /// <param name="app">A instance of <see cref="IApplicationBuilder"/>.</param>
        public void Configure(IApplicationBuilder app)
        {
            int cachePeriod;
            if (this.environment.IsDevelopment())
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
                },
            });

            // In development (debug) client will use another port
#if !DEBUG
            app.MapWhen(
                context => !context.Request.Path.StartsWithSegments("/api"),
                this.HandleSpa);
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

#if !DEBUG
        private void HandleSpa(IApplicationBuilder app)
        {
            app.Run(async (context) =>
            {
                context.Response.ContentType = "text/html";
                await context.Response.SendFileAsync(Path.Combine(this.environment.WebRootPath, "index.html"));
            });
        }
#endif
    }
}
