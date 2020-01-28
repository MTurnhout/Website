//-----------------------------------------------------------------------
// <copyright file="JwtSettings.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Application.Settings
{
    /// <summary>
    /// JWT settings.
    /// </summary>
    public class JwtSettings
    {
        /// <summary>
        /// Gets or sets the security key used to create the security token.
        /// </summary>
        /// <value>The security key used to create the security token.</value>
        public string Key { get; set; }

        /// <summary>
        /// Gets or sets the issuer.
        /// </summary>
        /// <value>The issuer.</value>
        public string Issuer { get; set; }

        /// <summary>
        /// Gets or sets the value of the 'audience' claim.
        /// </summary>
        /// <value>The value of the 'audience' claim.</value>
        public string Audience { get; set; }

        /// <summary>
        /// Gets or sets the value of the 'expiration' claim. This value should be in UTC.
        /// </summary>
        /// <value>The value of the 'expiration' claim.</value>
        public int MinutesToExpiration { get; set; }
    }
}
