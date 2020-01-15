//-----------------------------------------------------------------------
// <copyright file="ReCaptchaRequestModel.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------
namespace Website.Api.ReCaptcha
{
    using System.Text.Json.Serialization;

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
