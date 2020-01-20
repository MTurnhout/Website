//-----------------------------------------------------------------------
// <copyright file="IReCaptchaService.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Api.ReCaptcha
{
    public interface IReCaptchaService
    {
        bool Validate(string responseToken, string remoteIp = null);
    }
}
