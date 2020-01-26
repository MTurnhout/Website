//-----------------------------------------------------------------------
// <copyright file="IServiceCollectionExtension.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Api
{
    using Microsoft.AspNetCore.Http;
    using Microsoft.Extensions.DependencyInjection;
    using Website.Api.ReCaptcha;
    using Website.Business;
    using Website.Common.Database;

    /// <summary>
    /// Contains extension methods for <see cref="IServiceCollection"/>.
    /// </summary>
    public static class IServiceCollectionExtension
    {
        /// <summary>
        /// Adds services to dependency injection that are in API project.
        /// </summary>
        /// <param name="services"><see cref="IServiceCollection"/> being extended.</param>
        /// <param name="databaseSettings">Database settings.</param>
        /// <returns>Extended <see cref="IServiceCollection"/>.</returns>
        public static IServiceCollection AddApiServices(
            this IServiceCollection services,
            DatabaseSettings databaseSettings)
        {
            services.AddBusinessServices(databaseSettings);

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddSingleton<IReCaptchaService, ReCaptchaService>();

            return services;
        }
    }
}
