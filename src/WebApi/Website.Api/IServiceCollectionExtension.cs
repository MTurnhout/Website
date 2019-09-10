using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Website.Api.ReCaptcha;

namespace Website.Api
{
    public static class IServiceCollectionExtension
    {
        public static IServiceCollection AddApiServices(
            this IServiceCollection services)
        {
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddSingleton<IReCaptchaService, ReCaptchaService>();

            return services;
        }
    }
}