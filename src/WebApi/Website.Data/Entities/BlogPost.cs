using Microsoft.EntityFrameworkCore;
using System;

namespace Mt.Website.Data.Entities
{
    public class BlogPost
    {
        public int BlogPostId { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public string Title { get; set; }
        public DateTime CreationDate { get; set; }
        public string Headline { get; set; }
        public string Content { get; set; }
        public bool IsPublished { get; set; }
    }
}
