using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Website.Data;
using Website.Business.Authentication;

namespace Website.Business
{
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
