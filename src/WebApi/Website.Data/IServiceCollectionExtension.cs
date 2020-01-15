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
