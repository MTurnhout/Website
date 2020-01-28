//-----------------------------------------------------------------------
// <copyright file="ApplicationClaimType.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Application.Authentication.Enums
{
    /// <summary>
    /// The application claim types.
    /// </summary>
    public enum ApplicationClaimType
    {
        /// <summary>
        /// Can view admin page claim type.
        /// </summary>
        CanViewAdminPage = 1,

        /// <summary>
        /// Can add blog post claim type.
        /// </summary>
        CanAddBlogPost,

        /// <summary>
        /// Can update blog post claim type.
        /// </summary>
        CanUpdateBlogPost,

        /// <summary>
        /// Can delete blog post claim type.
        /// </summary>
        CanDeleteBlogPost,
    }
}
