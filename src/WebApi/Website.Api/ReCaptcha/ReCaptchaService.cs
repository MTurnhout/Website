//-----------------------------------------------------------------------
// <copyright file="ReCaptchaService.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Api.ReCaptcha
{
    using System;
    using System.Collections.Specialized;
    using System.Net;
    using System.Text;
    using System.Text.Json;
    using Microsoft.Extensions.Options;

    /// <summary>
    /// reCAPTCHA service that helps validating captcha response.
    /// </summary>
    public class ReCaptchaService : IReCaptchaService
    {
        private readonly ReCaptchaSettings recaptchaSettings;

        /// <summary>
        /// Initializes a new instance of the <see cref="ReCaptchaService"/> class.
        /// </summary>
        /// <param name="recaptchaSettings">
        /// A instance of <see cref="IOptions{ReCaptchaSettings}"/> containing the settings.
        /// </param>
        public ReCaptchaService(IOptions<ReCaptchaSettings> recaptchaSettings)
        {
            this.recaptchaSettings = recaptchaSettings.Value;
        }

        /// <summary>
        /// Validate captcha response.
        /// </summary>
        /// <param name="responseToken">The user response token provided by the reCAPTCHA.</param>
        /// <param name="remoteIp">The user's IP address (optional).</param>
        /// <returns>Boolean indicating if the response token in valid.</returns>
        public bool Validate(string responseToken, string remoteIp = null)
        {
            if (!this.recaptchaSettings.IsEnabled)
            {
                return true;
            }

            try
            {
                var values = new NameValueCollection
                {
                    { "secret", this.recaptchaSettings.SecretKey },
                    { "response", responseToken },
                };

#if !DEBUG
                if (!string.IsNullOrWhiteSpace(remoteIp))
                    values.Add("remoteip", remoteIp);
#endif

                using var client = new WebClient();
                var response = client.UploadValues(this.recaptchaSettings.ValidationUrl, values);
                var result = JsonSerializer.Deserialize<ReCaptchaResponseModel>(Encoding.UTF8.GetString(response));

                return result.Success;
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to validate reCAPTCHA", ex);
            }
        }
    }
}
