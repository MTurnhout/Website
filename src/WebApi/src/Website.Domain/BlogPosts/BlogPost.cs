//-----------------------------------------------------------------------
// <copyright file="BlogPost.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Domain.BlogPost
{
    using System;
    using Website.Domain.Common;
    using Website.Domain.Core;

    /// <summary>
    /// Model that contains blog post details.
    /// </summary>
    public class BlogPost : IEntity
    {
        public int Id { get; set; }

        public int CreatedById { get; set; }

        public User CreatedBy { get; set; }

        public DateTime CreatedAt { get; set; }

        public int ModifiedById { get; set; }

        public User ModifiedBy { get; set; }

        public DateTime ModifiedAt { get; set; }

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

        /// <summary>
        /// Gets or sets the published date of the blog post.
        /// </summary>
        /// <value>The published date of the blog post.</value>
        public DateTime? PublishedAt { get; set; }
    }
}
