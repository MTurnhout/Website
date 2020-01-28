//-----------------------------------------------------------------------
// <copyright file="BlogPostsService.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Application.Blog
{
    using System;
    using System.Collections.Generic;
    using Website.Common.Blog.Models;

    /// <summary>
    /// Blog post service that provides access to blog post data.
    /// </summary>
    public class BlogPostsService
    {
        /// <summary>
        /// Get all the blog posts.
        /// </summary>
        /// <returns>All blog posts.</returns>
        public List<BlogPostModel> GetBlogPosts()
        {
            return new List<BlogPostModel>
            {
                new BlogPostModel { PublishedAt = DateTime.UtcNow, Headline = "Test 1", Intro = "Intro 1", Body = "Body 1" },
                new BlogPostModel { PublishedAt = DateTime.UtcNow, Headline = "Test 2", Intro = "Intro 2", Body = "Body 2" },
                new BlogPostModel { PublishedAt = DateTime.UtcNow, Headline = "Test 3", Intro = "Intro 3", Body = "Body 3" },
                new BlogPostModel { PublishedAt = DateTime.UtcNow, Headline = "Test 4", Intro = "Intro 4", Body = "Body 4" },
                new BlogPostModel { PublishedAt = DateTime.UtcNow, Headline = "Test 5", Intro = "Intro 5", Body = "Body 5" },
            };
        }
    }
}
