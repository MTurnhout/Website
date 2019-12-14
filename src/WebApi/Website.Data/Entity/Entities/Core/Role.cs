using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Website.Data.Entity
{
    [Table("Role", Schema = "core")]
    internal class Role
    {
        public int Id { get; set; }
        public string Name { get; set; }


        public List<RolePermission> Permissions { get; set; } = new List<RolePermission>();
    }
}