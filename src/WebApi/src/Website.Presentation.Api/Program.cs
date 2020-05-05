//-----------------------------------------------------------------------
// <copyright file="Program.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Presentation.Api
{
    using Microsoft.AspNetCore;
    using Microsoft.AspNetCore.Hosting;

    /// <summary>
    /// The main program class.
    /// </summary>
    public class Program
    {
        /// <summary>
        /// Run Web API.
        /// </summary>
        /// <param name="args">Arguments.</param>
        public static void Main(string[] args)
        {
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build()
                .Run();
        }

        /// <summary>
        /// EF Core uses this method at design time to access the DbContext.
        /// </summary>
        /// <param name="args">Arguments.</param>
        /// <returns>Instance of <see cref="IWebHostBuilder"/>.</returns>
        public static IWebHostBuilder CreateHostBuilder(string[] args)
            => WebHost
                .CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
