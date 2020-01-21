//-----------------------------------------------------------------------
// <copyright file="IServiceCollectionExtension.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Business
{
    using Microsoft.Extensions.DependencyInjection;
    using Website.Business.Authentication;
    using Website.Common.Database;
    using Website.Data;

    public static class IServiceCollectionExtension
    {
        public static IServiceCollection AddBusinessServices(
            this IServiceCollection services,
            DatabaseSettings databaseSettings)
        {
            services.AddDataServices(databaseSettings);

            services.AddScoped<IAuthenticationService, AuthenticationService>();

            return services;
        }
    }
}
