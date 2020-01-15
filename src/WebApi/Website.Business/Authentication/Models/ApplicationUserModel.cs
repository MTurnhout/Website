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

    public class ApplicationUserModel
    {
        public bool IsAuthenticated { get; set; }

        public string BearerToken { get; set; }

        public string UserName { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public List<ApplicationClaimType> Claims { get; set; }
    }
}
