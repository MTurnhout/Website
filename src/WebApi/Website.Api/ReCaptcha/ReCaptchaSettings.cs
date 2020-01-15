//-----------------------------------------------------------------------
// <copyright file="ReCaptchaSettings.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------
namespace Website.Api.ReCaptcha
{
    public class ReCaptchaSettings
    {
        public bool IsEnabled { get; set; }

        public string ValidationUrl { get; set; }

        public string SecretKey { get; set; }
    }
}
