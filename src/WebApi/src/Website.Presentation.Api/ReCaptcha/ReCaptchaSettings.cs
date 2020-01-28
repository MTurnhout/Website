//-----------------------------------------------------------------------
// <copyright file="ReCaptchaSettings.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Presentation.Api.ReCaptcha
{
    /// <summary>
    /// ReCAPTCHA settings.
    /// </summary>
    public class ReCaptchaSettings
    {
        /// <summary>
        /// Gets or sets a value indicating whether reCAPTCHA is enabled.
        /// </summary>
        /// <value>True if reCAPTCHA is enabled.</value>
        public bool IsEnabled { get; set; }

        /// <summary>
        /// Gets or sets the validation URL to which the validation request should be send to.
        /// </summary>
        /// <value>The validation URL.</value>
        public string ValidationUrl { get; set; }

        /// <summary>
        /// Gets or sets the shared key between the site and reCAPTCHA.
        /// </summary>
        /// <value>The shared key.</value>
        public string SecretKey { get; set; }
    }
}
