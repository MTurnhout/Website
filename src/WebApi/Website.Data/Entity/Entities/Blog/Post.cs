using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Website.Data.Entity
{
    [Table("Post", Schema = "blog")]
    internal class Post
    {
        public int Id { get; set; }
        public int BlogId { get; set; }
        public Blog Blog { get; set; }
        public int CreatedById { get; set; }
        public User CreatedBy { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime CreatedAt { get; set; }
        public DateTime? PublishedAt { get; set; }

        public List<PostContent> Contents { get; set; } = new List<PostContent>();
    }
}
