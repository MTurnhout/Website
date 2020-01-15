//-----------------------------------------------------------------------
// <copyright file="IServiceCollectionExtension.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------
namespace Website.Business
{
    using System;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.DependencyInjection;
    using Website.Business.Authentication;
    using Website.Data;

    public static class IServiceCollectionExtension
    {
        public static IServiceCollection AddBusinessServices(
            this IServiceCollection services,
            Action<DbContextOptionsBuilder> setDbContextOptions)
        {
            services.AddDataServices(setDbContextOptions);

            services.AddScoped<IAuthenticationService, AuthenticationService>();

            return services;
        }
    }
}
