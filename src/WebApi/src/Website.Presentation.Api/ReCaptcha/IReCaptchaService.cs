//-----------------------------------------------------------------------
// <copyright file="IReCaptchaService.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Api.ReCaptcha
{
    /// <summary>
    /// reCAPTCHA service that helps validating captcha response.
    /// </summary>
    public interface IReCaptchaService
    {
        /// <summary>
        /// Validate captcha response.
        /// </summary>
        /// <param name="responseToken">The user response token provided by the reCAPTCHA.</param>
        /// <param name="remoteIp">The user's IP address (optional).</param>
        /// <returns>Boolean indicating if the response token in valid.</returns>
        bool Validate(string responseToken, string remoteIp = null);
    }
}
