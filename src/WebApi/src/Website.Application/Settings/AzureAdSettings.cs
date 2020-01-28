//-----------------------------------------------------------------------
// <copyright file="AzureAdSettings.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Application.Settings
{
    /// <summary>
    /// Azure AD settings.
    /// </summary>
    public class AzureAdSettings
    {
        /// <summary>
        /// Gets or sets a value indicating whether Azure AD authentication is enabled.
        /// </summary>
        /// <value>True if Azure AD authentication is enabled.</value>
        public bool IsEnabled { get; set; }

        /// <summary>
        /// Gets or sets the Directory (tenant) ID of the app registration.
        /// </summary>
        /// <value>The Directory (tenant) ID of the app registration.</value>
        public string TenantId { get; set; }

        /// <summary>
        /// Gets or sets the Application (client) ID of the app registration.
        /// </summary>
        /// <value>The Application (client) ID of the app registration.</value>
        public string ClientId { get; set; }

        /// <summary>
        /// Gets or sets the client secret you generated in the app registration.
        /// </summary>
        /// <value>The client secret you generated in the app registration.</value>
        public string ClientSecret { get; set; }
    }
}
