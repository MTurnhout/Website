using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Mt.Website.Data.Entities;

namespace Mt.Website.Data
{
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
