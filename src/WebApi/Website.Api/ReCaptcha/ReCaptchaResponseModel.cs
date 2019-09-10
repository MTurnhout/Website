using System;
using System.Globalization;
using Newtonsoft.Json;

namespace Website.Api.ReCaptcha
{
    public class ReCaptchaResponseModel
    {
        [JsonProperty("success")]
        public bool Success { get; set; }

        public DateTime ChallengeAt { get; set; }

        [JsonProperty("challenge_ts")]
        public string ChallengeTimestamp
        {
            set => ChallengeAt = DateTime.Parse(value, CultureInfo.CreateSpecificCulture("en-US"));
        }

        [JsonProperty("hostname")]
        public string Hostname { get; set; }

        [JsonProperty("error-codes")]
        public string[] ErrorCodes { get; set; }
    }
}