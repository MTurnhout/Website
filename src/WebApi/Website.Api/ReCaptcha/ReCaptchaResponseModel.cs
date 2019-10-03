using System;
using System.Globalization;
using System.Text.Json.Serialization;

namespace Website.Api.ReCaptcha
{
    public class ReCaptchaResponseModel
    {
        [JsonPropertyName("success")]
        public bool Success { get; set; }

        public DateTime ChallengeAt { get; set; }

        [JsonPropertyName("challenge_ts")]
        public string ChallengeTimestamp
        {
            set => ChallengeAt = DateTime.Parse(value, CultureInfo.CreateSpecificCulture("en-US"));
        }

        [JsonPropertyName("hostname")]
        public string Hostname { get; set; }

        [JsonPropertyName("error-codes")]
        public string[] ErrorCodes { get; set; }
    }
}