//-----------------------------------------------------------------------
// <copyright file="User.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------
namespace Website.Data.Entity
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("User", Schema = "core")]
    internal class User
    {
        public int Id { get; set; }

        public string UserName { get; set; }

        public string Email { get; set; }

        public int DetailId { get; set; }

        public UserDetail Details { get; set; }

        public List<UserRole> Roles { get; set; } = new List<UserRole>();
    }
}
