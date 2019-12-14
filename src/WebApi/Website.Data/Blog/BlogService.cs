using System.Collections.Generic;
using System.Linq;
using Website.Data.Blog.Models;
using Website.Data.Entity;

namespace Website.Data.Blog
{
    public class BlogService
    {
        private readonly WebsiteContext _context;

        internal BlogService(WebsiteContext context)
        {
            _context = context;
        }

        public List<BlogPostModel> GetPosts(int blogId)
        {
            return _context.Posts
                .Where(p => p.BlogId == blogId)
                .Select(p => new BlogPostModel
                {

                })
                .ToList();
        }
    }
}