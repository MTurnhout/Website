using System;

namespace Website.Business.Blog.Models
{
    public class BlogPostModel
    {
        public DateTime PublishedAt { get; set; }
        public string Headline { get; set; }
        public string Intro { get; set; }
        public string Body { get; set; }
    }
}