//-----------------------------------------------------------------------
// <copyright file="BlogPostModel.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------
namespace Website.Business.Blog.Models
{
    using System;

    public class BlogPostModel
    {
        public DateTime PublishedAt { get; set; }

        public string Headline { get; set; }

        public string Intro { get; set; }

        public string Body { get; set; }
    }
}
