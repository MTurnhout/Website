//-----------------------------------------------------------------------
// <copyright file="IServiceCollectionExtension.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Data
{
    using System;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.DependencyInjection;
    using Website.Common.Database;
    using Website.Data.Entity;

    public static class IServiceCollectionExtension
    {
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
