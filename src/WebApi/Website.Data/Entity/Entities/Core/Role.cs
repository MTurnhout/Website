//-----------------------------------------------------------------------
// <copyright file="Role.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Data.Entity
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Role", Schema = "core")]
    internal class Role
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public List<RolePermission> Permissions { get; set; } = new List<RolePermission>();
    }
}
