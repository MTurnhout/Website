//-----------------------------------------------------------------------
// <copyright file="UserCredentials.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Business.Authentication.Models
{
    public class UserCredentials
    {
        public string Email { get; set; }

        public string Password { get; set; }

        public string Recaptcha { get; set; }
    }
}
