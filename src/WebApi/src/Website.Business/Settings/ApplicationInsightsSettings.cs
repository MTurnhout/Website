//-----------------------------------------------------------------------
// <copyright file="ApplicationInsightsSettings.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Business.Settings
{
    /// <summary>
    /// Application insights settings.
    /// </summary>
    public class ApplicationInsightsSettings
    {
        /// <summary>
        /// Gets or sets the instrumentation key for application insights.
        /// </summary>
        /// <value>The instrumentation key for application insights.</value>
        public string InstrumentationKey { get; set; }
    }
}
