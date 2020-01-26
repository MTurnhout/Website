//-----------------------------------------------------------------------
// <copyright file="Permission.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Data.Entity
{
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Permission", Schema = "core")]
    internal class Permission
    {
        public int Id { get; set; }

        public string Name { get; set; }
    }
}
