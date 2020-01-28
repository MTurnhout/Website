//-----------------------------------------------------------------------
// <copyright file="IServiceCollectionExtension.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Common
{
    using Microsoft.Extensions.DependencyInjection;
    using Website.Common.Dates;

    /// <summary>
    /// Contains extension methods for <see cref="IServiceCollection"/>.
    /// </summary>
    public static class IServiceCollectionExtension
    {
        /// <summary>
        /// Adds services to dependency injection that are in common project.
        /// </summary>
        /// <param name="services"><see cref="IServiceCollection"/> being extended.</param>
        /// <returns>Extended <see cref="IServiceCollection"/>.</returns>
        public static IServiceCollection AddCommonServices(
            this IServiceCollection services)
        {
            services.AddSingleton<IDateService, DateService>();

            return services;
        }
    }
}
