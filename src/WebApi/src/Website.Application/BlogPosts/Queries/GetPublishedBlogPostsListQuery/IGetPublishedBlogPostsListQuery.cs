//-----------------------------------------------------------------------
// <copyright file="IGetPublishedBlogPostsListQuery.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Application.BlogPosts.Queries.GetPublishedBlogPostsListQuery
{
    using System.Collections.Generic;

    public interface IGetPublishedBlogPostsListQuery
    {
        List<BlogPostModel> Execute();
    }
}