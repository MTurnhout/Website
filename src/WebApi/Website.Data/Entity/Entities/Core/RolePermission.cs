using System.ComponentModel.DataAnnotations.Schema;

namespace Website.Data.Entity
{
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