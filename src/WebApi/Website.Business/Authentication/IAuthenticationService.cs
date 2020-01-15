//-----------------------------------------------------------------------
// <copyright file="IAuthenticationService.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------
namespace Website.Business.Authentication
{
    using System.Security.Claims;
    using Website.Business.Authentication.Models;

    public interface IAuthenticationService
    {
        ApplicationUserModel Authenticate(UserCredentials userCredentials);

        ApplicationUserModel GetCurrentUser(ClaimsPrincipal user);
    }
}
