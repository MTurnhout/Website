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
    using Website.Data.Entity;

    public static class IServiceCollectionExtension
    {
        public static IServiceCollection AddDataServices(
            this IServiceCollection services,
            Action<DbContextOptionsBuilder> setDbContextOptions)
        {
            services.AddDbContext<WebsiteContext>(setDbContextOptions);

            return services;
        }
    }
}
