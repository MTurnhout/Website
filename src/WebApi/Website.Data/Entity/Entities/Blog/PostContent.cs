using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Website.Data.Entity
{
    [Table("PostContent", Schema = "blog")]
    internal class PostContent
    {
        public int Id { get; set; }
        public int PostId { get; set; }
        public Post Post { get; set; }
        public int CreatedById { get; set; }
        public User CreatedBy { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime CreatedAt { get; set; }
        public string Headline { get; set; }
        public string Intro { get; set; }
        public string Body { get; set; }
        public bool IsCurrent { get; set; }
    }
}
