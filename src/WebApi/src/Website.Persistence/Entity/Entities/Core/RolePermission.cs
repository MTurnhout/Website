//-----------------------------------------------------------------------
// <copyright file="RolePermission.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Persistence.Entity
{
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("RolePermission", Schema = "core")]
    internal class RolePermission
    {
        public int Id { get; set; }

        public int RoleId { get; set; }

        public Role Role { get; set; }

        public int PermissionId { get; set; }

        public Permission Permission { get; set; }
    }
}
