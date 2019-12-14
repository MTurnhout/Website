using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Website.Data.Entity
{
    [Table("Session", Schema = "core")]
    internal class Session
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public DateTime SessionAt { get; set; }
        public string IpAddress { get; set; }
    }
}
