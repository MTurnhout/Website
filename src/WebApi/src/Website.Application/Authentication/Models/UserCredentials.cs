//-----------------------------------------------------------------------
// <copyright file="UserCredentials.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Business.Authentication.Models
{
    /// <summary>
    /// Model that contains the user credentials.
    /// </summary>
    public class UserCredentials
    {
        /// <summary>
        /// Gets or sets the email address of the user.
        /// </summary>
        /// <value>The email address of the user.</value>
        public string Email { get; set; }

        /// <summary>
        /// Gets or sets the password of the user.
        /// </summary>
        /// <value>The password of the user.</value>
        public string Password { get; set; }

        /// <summary>
        /// Gets or sets the reCHAPTCHA response token from Google.
        /// </summary>
        /// <value>The reCHAPTCHA response token from Google.</value>
        public string Recaptcha { get; set; }
    }
}
