using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Mt.Website.Data;
using Website.Business.Authentication;

namespace Mt.Website.Business
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
