//-----------------------------------------------------------------------
// <copyright file="BlogService.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Data.Blog
{
    using System.Collections.Generic;
    using System.Linq;
    using Website.Data.Blog.Models;
    using Website.Data.Entity;

    public class BlogService
    {
        private readonly WebsiteContext context;

        internal BlogService(WebsiteContext context)
        {
            this.context = context;
        }

        public List<BlogPostModel> GetPosts(int blogId)
        {
            return this.context.Posts
                .Where(p => p.BlogId == blogId)
                .Select(p => new BlogPostModel
                {
                })
                .ToList();
        }
    }
}
