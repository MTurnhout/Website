using System;
using System.Collections.Specialized;
using System.Net;
using System.Text;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

namespace Website.Api.ReCaptcha
{
    public class ReCaptchaService : IReCaptchaService
    {
        private readonly ReCaptchaSettings _reCaptchaSettings;

        public ReCaptchaService(IOptions<ReCaptchaSettings> reCaptchaSettings)
        {
            _reCaptchaSettings = reCaptchaSettings.Value;
        }

        public bool Validate(string responseToken, string remoteIp = null)
        {
            try
            {
                var values = new NameValueCollection
                {
                    {"secret", _reCaptchaSettings.SecretKey},
                    {"response", responseToken},
                };

#if !DEBUG
                if (!string.IsNullOrWhiteSpace(remoteIp))
                    values.Add("remoteip", remoteIp);
#endif

                using (var client = new WebClient())
                {
                    var response = client.UploadValues(_reCaptchaSettings.ValidationUrl, values);
                    var result = JsonConvert.DeserializeObject<ReCaptchaResponseModel>(Encoding.UTF8.GetString(response));

                    return result.Success;
                }
            }
            catch (System.Exception ex)
            {
                throw new Exception("Failed to validate reCAPTCHA", ex);
            }
        }
    }
}