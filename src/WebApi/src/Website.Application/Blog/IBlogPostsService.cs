//-----------------------------------------------------------------------
// <copyright file="IBlogPostsService.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Business.Blog
{
    using System.Collections.Generic;
    using Website.Common.Blog.Models;

    /// <summary>
    /// Blog post service that provides access to blog post data.
    /// </summary>
    public interface IBlogPostsService
    {
        /// <summary>
        /// Get all the blog posts.
        /// </summary>
        /// <returns>All blog posts.</returns>
        List<BlogPostModel> GetBlogPosts();
    }
}
