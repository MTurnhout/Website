using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Mt.Website.Data.Entities
{
    [Table("BlogPost", Schema = "core")]
    public class BlogPost
    {
        public int BlogPostId { get; set; }
        public int PublishedById { get; set; }
        public User PublishedBy { get; set; }
        public DateTime PublishedAt { get; set; }
        public string Headline { get; set; }
        public string Intro { get; set; }
        public string Body { get; set; }
        public bool IsPublished { get; set; }
    }
}
