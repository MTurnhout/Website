//-----------------------------------------------------------------------
// <copyright file="IAuthenticationService.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Application.Authentication
{
    using System.Security.Claims;
    using Website.Application.Authentication.Models;

    /// <summary>
    /// Authentication services that helps authenticate a user.
    /// </summary>
    public interface IAuthenticationService
    {
        /// <summary>
        /// Authenticate a user with the specified credentials.
        /// </summary>
        /// <param name="userCredentials">The credentials of the user.</param>
        /// <returns>User details if user can be authenticated. Otherwise null.</returns>
        ApplicationUserModel Authenticate(UserCredentials userCredentials);

        /// <summary>
        /// Get the current authenticated user details.
        /// </summary>
        /// <param name="user">The authenticated user.</param>
        /// <returns>The current authentication user details.</returns>
        ApplicationUserModel GetCurrentUser(ClaimsPrincipal user);
    }
}
