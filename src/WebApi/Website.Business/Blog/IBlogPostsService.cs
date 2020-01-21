//-----------------------------------------------------------------------
// <copyright file="IBlogPostsService.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Business.Blog
{
    using System.Collections.Generic;
    using Website.Common.Models.Blog;

    public interface IBlogPostsService
    {
        List<BlogPostModel> GetBlogPosts();
    }
}
