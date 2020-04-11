//-----------------------------------------------------------------------
// <copyright file="IServiceCollectionExtension.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Persistence
{
    using System;
    using CleanArchitecture.Persistence.BlogPosts;
    using CleanArchitecture.Persistence.Customers;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.DependencyInjection;
    using Website.Application.Interfaces.Persistence;
    using Website.Common.Database;
    using Website.Persistence.Shared;

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
        public static IServiceCollection AddPersistenceServices(
            this IServiceCollection services,
            DatabaseSettings databaseSettings)
        {
            switch (databaseSettings.DatabaseType)
            {
                case DatabaseType.MsSql:
                    services.AddDbContext<IDatabaseContext, DatabaseContext>(options =>
                        options.UseSqlServer(databaseSettings.ConnectionString));
                    break;
                default:
                    throw new NotImplementedException(nameof(DatabaseType));
            }

            services.AddScoped<IPermissionRepository, PermissionRepository>();
            services.AddScoped<IRolePermissionRepository, RolePermissionRepository>();
            services.AddScoped<IRoleRepository, RoleRepository>();
            services.AddScoped<ISessionRepository, SessionRepository>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IUserRoleRepository, UserRoleRepository>();

            services.AddScoped<IBlogPostRepository, BlogPostRepository>();

            return services;
        }
    }
}
