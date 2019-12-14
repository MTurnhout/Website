using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Website.Data.Entity
{
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
