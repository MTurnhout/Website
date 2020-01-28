//-----------------------------------------------------------------------
// <copyright file="ReCaptchaRequestModel.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Api.ReCaptcha
{
    using System.Text.Json.Serialization;

    /// <summary>
    /// ReCAPTCHA request model to be send to Google for validation of response token.
    /// </summary>
    public class ReCaptchaRequestModel
    {
        /// <summary>
        /// Gets or sets the shared key between the site and reCAPTCHA.
        /// </summary>
        /// <value>The shared key between the site and reCAPTCHA.</value>
        [JsonPropertyName("secret")]
        public string Secret { get; set; }

        /// <summary>
        /// Gets or sets the user response token provided by reCAPTCHA.
        /// </summary>
        /// <value>The user response token provided by reCAPTCHA.</value>
        [JsonPropertyName("response")]
        public string Response { get; set; }

        /// <summary>
        /// Gets or sets the user's IP address.
        /// </summary>
        /// <value>The user's IP address.</value>
        [JsonPropertyName("remoteip")]
        public string RemoteIp { get; set; }
    }
}
