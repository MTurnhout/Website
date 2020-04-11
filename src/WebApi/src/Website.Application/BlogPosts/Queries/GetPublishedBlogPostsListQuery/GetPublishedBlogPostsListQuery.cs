//-----------------------------------------------------------------------
// <copyright file="GetPublishedBlogPostsListQuery.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Application.BlogPosts.Queries.GetPublishedBlogPostsListQuery
{
    using System.Collections.Generic;
    using System.Linq;
    using Website.Application.Interfaces.Persistence;

    public class GetPublishedBlogPostsListQuery : IGetPublishedBlogPostsListQuery
    {
        private readonly IBlogPostRepository repository;

        public GetPublishedBlogPostsListQuery(IBlogPostRepository repository)
        {
            this.repository = repository;
        }

        public List<BlogPostModel> Execute()
        {
            // var blogPostsQuery = this.repository.GetAll()
            //     .Where(bp => bp.PublishedAt.HasValue)
            //     .OrderByDescending(bp => bp.PublishedAt)
            //     .Select(bp => new BlogPostModel
            //     {
            //         Id = bp.Id,
            //         PublishedAt = bp.PublishedAt.Value,
            //         UserName = bp.ModifiedBy.UserName,
            //         Headline = bp.Headline,
            //         Intro = bp.Intro,
            //         Body = bp.Body,
            //     });

            // return blogPostsQuery.ToList();

            return new List<BlogPostModel>
            {
                new BlogPostModel { Headline = "Test" }
            };
        }
    }
}
