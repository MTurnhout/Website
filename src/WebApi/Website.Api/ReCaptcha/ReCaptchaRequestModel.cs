using System.Text.Json.Serialization;

namespace Website.Api.ReCaptcha
{
    public class ReCaptchaRequestModel
    {
        [JsonPropertyName("secret")]
        public string Secret { get; set; }

        [JsonPropertyName("response")]
        public string Response { get; set; }

        [JsonPropertyName("remoteip")]
        public string RemoteIp { get; set; }
    }
}