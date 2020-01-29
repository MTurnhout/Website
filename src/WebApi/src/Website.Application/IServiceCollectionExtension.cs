//-----------------------------------------------------------------------
// <copyright file="IServiceCollectionExtension.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Application
{
    using Microsoft.Extensions.DependencyInjection;
    using Website.Application.Authentication;

    /// <summary>
    /// Contains extension methods for <see cref="IServiceCollection"/>.
    /// </summary>
    public static class IServiceCollectionExtension
    {
        /// <summary>
        /// Adds services to dependency injection that are in application project.
        /// </summary>
        /// <param name="services"><see cref="IServiceCollection"/> being extended.</param>
        /// <returns>Extended <see cref="IServiceCollection"/>.</returns>
        public static IServiceCollection AddApplicationServices(
            this IServiceCollection services)
        {
            services.AddScoped<IAuthenticationService, AuthenticationService>();

            return services;
        }
    }
}
