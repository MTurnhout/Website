using System.ComponentModel.DataAnnotations.Schema;

namespace Website.Data.Entity
{
    [Table("Permission", Schema = "core")]
    internal class Permission
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}