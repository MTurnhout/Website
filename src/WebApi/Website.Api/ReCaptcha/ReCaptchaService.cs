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

    public class ReCaptchaService : IReCaptchaService
    {
        private readonly ReCaptchaSettings recaptchaSettings;

        public ReCaptchaService(IOptions<ReCaptchaSettings> recaptchaSettings)
        {
            this.recaptchaSettings = recaptchaSettings.Value;
        }

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
            catch (System.Exception ex)
            {
                throw new Exception("Failed to validate reCAPTCHA", ex);
            }
        }
    }
}
