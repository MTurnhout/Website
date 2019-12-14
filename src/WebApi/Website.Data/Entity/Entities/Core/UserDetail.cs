using System.ComponentModel.DataAnnotations.Schema;

namespace Website.Data.Entity
{
    [Table("UserDetail", Schema = "core")]
    internal class UserDetail
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
    }
}
