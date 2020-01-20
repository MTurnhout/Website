//-----------------------------------------------------------------------
// <copyright file="ReCaptchaResponseModel.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Api.ReCaptcha
{
    using System;
    using System.Globalization;
    using System.Text.Json.Serialization;

    public class ReCaptchaResponseModel
    {
        [JsonPropertyName("success")]
        public bool Success { get; set; }

        public DateTime ChallengeAt { get; set; }

        [JsonPropertyName("challenge_ts")]
        public string ChallengeTimestamp
        {
            set => this.ChallengeAt = DateTime.Parse(value, CultureInfo.CreateSpecificCulture("en-US"));
        }

        [JsonPropertyName("hostname")]
        public string Hostname { get; set; }

        [JsonPropertyName("error-codes")]
        public string[] ErrorCodes { get; set; }
    }
}
