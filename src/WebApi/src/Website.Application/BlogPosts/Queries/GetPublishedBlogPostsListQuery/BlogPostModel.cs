//-----------------------------------------------------------------------
// <copyright file="BlogPostModel.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Application.BlogPosts.Queries.GetPublishedBlogPostsListQuery
{
    using System;

    /// <summary>
    /// Model that contains blog post details.
    /// </summary>
    public class BlogPostModel
    {
        /// <summary>
        /// Gets or sets the identifier of the blog post.
        /// </summary>
        /// <value>The identifier of the blog post.</value>
        public int Id { get; set; }

        /// <summary>
        /// Gets or sets the published date of the blog post.
        /// </summary>
        /// <value>The published date of the blog post.</value>
        public DateTime PublishedAt { get; set; }

        /// <summary>
        /// Gets or sets the user name of user that created or modified of the blog post.
        /// </summary>
        /// <value>The user name of user that created or modified of the blog post.</value>
        public string UserName { get; set; }

        /// <summary>
        /// Gets or sets the headline of the blog post.
        /// </summary>
        /// <value>The headline of the blog post.</value>
        public string Headline { get; set; }

        /// <summary>
        /// Gets or sets the intro of the blog post.
        /// </summary>
        /// <value>The intro of the blog post.</value>
        public string Intro { get; set; }

        /// <summary>
        /// Gets or sets the body of the blog post.
        /// </summary>
        /// <value>The body of the blog post.</value>
        public string Body { get; set; }
    }
}
