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

    /// <summary>
    /// ReCAPTCHA response model to be recieved from Google containing validation result.
    /// </summary>
    public class ReCaptchaResponseModel
    {
        /// <summary>
        /// Gets or sets a value indicating whether the user response token was valid.
        /// </summary>
        /// <value>True if user response token was valid.</value>
        [JsonPropertyName("success")]
        public bool Success { get; set; }

        /// <summary>
        /// Gets or sets timestamp of the challenge.
        /// </summary>
        /// <value>The timestamp of the challenge.</value>
        public DateTime ChallengeAt { get; set; }

        /// <summary>
        /// Sets timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ).
        /// </summary>
        /// <value>The timestamp of the challenge.</value>
        [JsonPropertyName("challenge_ts")]
        public string ChallengeTimestamp
        {
            set => this.ChallengeAt = DateTime.Parse(value, CultureInfo.CreateSpecificCulture("en-US"));
        }

        /// <summary>
        /// Gets or sets the package name of the app where the reCAPTCHA was solved.
        /// </summary>
        /// <value>The package name of the app where the reCAPTCHA was solved.</value>
        [JsonPropertyName("hostname")]
        public string Hostname { get; set; }

        /// <summary>
        /// Gets or sets array containing the error codes.
        /// missing-input-secret - (The secret parameter is missing).
        /// invalid-input-secret - (The secret parameter is invalid or malformed).
        /// missing-input-response - (The response parameter is missing).
        /// invalid-input-response - (The response parameter is invalid or malformed).
        /// bad-request - (The request is invalid or malformed).
        /// timeout-or-duplicate - (The response is no longer valid: either is too old or has been used previously).
        /// </summary>
        /// <value>Array containing the error codes.</value>
        [JsonPropertyName("error-codes")]
        public string[] ErrorCodes { get; set; }
    }
}
