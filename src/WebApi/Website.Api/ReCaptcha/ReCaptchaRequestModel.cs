using Newtonsoft.Json;

namespace Website.Api.ReCaptcha
{
    public class ReCaptchaRequestModel
    {
        [JsonProperty("secret")]
        public string Secret { get; set; }

        [JsonProperty("response")]
        public string Response { get; set; }

        [JsonProperty("remoteip")]
        public string RemoteIp { get; set; }
    }
}