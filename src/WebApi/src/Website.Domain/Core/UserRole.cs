//-----------------------------------------------------------------------
// <copyright file="UserRole.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Domain.Core
{
    using Website.Domain.Common;

    public class UserRole : IEntity
    {
        /// <summary>
        /// Gets or sets identifier of user role.
        /// </summary>
        /// <value>The identifier of the user role.</value>
        public int Id { get; set; }

        /// <summary>
        /// Gets or sets user identifier of user role.
        /// </summary>
        /// <value>The user identifier of the user role.</value>
        public int UserId { get; set; }

        /// <summary>
        /// Gets or sets user of user role.
        /// </summary>
        /// <value>The user of the user role.</value>
        public User User { get; set; }

        /// <summary>
        /// Gets or sets role identifier of user role.
        /// </summary>
        /// <value>The role identifier of the user role.</value>
        public int RoleId { get; set; }

        /// <summary>
        /// Gets or sets role of user role.
        /// </summary>
        /// <value>The role of the user role.</value>
        public Role Role { get; set; }
    }
}
