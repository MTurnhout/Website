//-----------------------------------------------------------------------
// <copyright file="IServiceCollectionExtension.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Persistence
{
    using System;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.DependencyInjection;
    using Website.Common.Database;
    using Website.Persistence.Entity;

    /// <summary>
    /// Contains extension methods for <see cref="IServiceCollection"/>.
    /// </summary>
    public static class IServiceCollectionExtension
    {
        /// <summary>
        /// Adds services to dependency injection that are in persistence project.
        /// </summary>
        /// <param name="services"><see cref="IServiceCollection"/> being extended.</param>
        /// <param name="databaseSettings">Database settings.</param>
        /// <returns>Extended <see cref="IServiceCollection"/>.</returns>
        public static IServiceCollection AddDataServices(
            this IServiceCollection services,
            DatabaseSettings databaseSettings)
        {
            switch (databaseSettings.DatabaseType)
            {
                case DatabaseType.MsSql:
                    services.AddDbContext<WebsiteContext>(options =>
                        options.UseSqlServer(databaseSettings.ConnectionString));
                    break;
                default:
                    throw new NotImplementedException(nameof(DatabaseType));
            }

            return services;
        }
    }
}
