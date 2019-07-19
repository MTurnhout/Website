using System.Collections.Generic;
using Website.Business.Blog.Models;

namespace Website.Business.Blog
{
    public interface IBlogPostsService
    {
        List<BlogPostModel> GetBlogPosts();
    }
}