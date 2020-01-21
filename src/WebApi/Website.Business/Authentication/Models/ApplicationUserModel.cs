//-----------------------------------------------------------------------
// <copyright file="ApplicationUserModel.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Business.Authentication.Models
{
    using System.Collections.Generic;
    using Website.Business.Authentication.Enums;

    /// <summary>
    /// Model that contains authenticated user details.
    /// </summary>
    public class ApplicationUserModel
    {
        /// <summary>
        /// Gets or sets a value indicating whether user is authenticated.
        /// </summary>
        /// <value>True if user is authenticated.</value>
        public bool IsAuthenticated { get; set; }

        /// <summary>
        /// Gets or sets the bearer token of the user session.
        /// </summary>
        /// <value>The bearer token of the user session.</value>
        public string BearerToken { get; set; }

        /// <summary>
        /// Gets or sets the user name of the user.
        /// </summary>
        /// <value>The user name of the user.</value>
        public string UserName { get; set; }

        /// <summary>
        /// Gets or sets the first name of the user.
        /// </summary>
        /// <value>The first name of the user.</value>
        public string FirstName { get; set; }

        /// <summary>
        /// Gets or sets the last name of the user.
        /// </summary>
        /// <value>The last name of the user.</value>
        public string LastName { get; set; }

        /// <summary>
        /// Gets or sets the email address of the user.
        /// </summary>
        /// <value>The email address of the user.</value>
        public string Email { get; set; }

        /// <summary>
        /// Gets or sets the claims of the user.
        /// </summary>
        /// <value>The claims of the user.</value>
        public List<ApplicationClaimType> Claims { get; set; }
    }
}
