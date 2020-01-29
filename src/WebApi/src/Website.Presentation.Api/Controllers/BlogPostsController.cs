//-----------------------------------------------------------------------
// <copyright file="BlogPostsController.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Presentation.Api.Controllers
{
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using Website.Application.BlogPosts.Queries.GetPublishedBlogPostsListQuery;

    /// <summary>
    /// A Web API controller that provides access to blog post data.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class BlogPostsController : ControllerBase
    {
        private readonly IGetPublishedBlogPostsListQuery getPublishedBlogPostsListQuery;

        /// <summary>
        /// Initializes a new instance of the <see cref="BlogPostsController"/> class.
        /// </summary>
        /// <param name="getPublishedBlogPostsListQuery">A instance of <see cref="IGetPublishedBlogPostsListQuery"/>.</param>
        public BlogPostsController(
            IGetPublishedBlogPostsListQuery getPublishedBlogPostsListQuery)
        {
            this.getPublishedBlogPostsListQuery = getPublishedBlogPostsListQuery;
        }

        /// <summary>
        /// Gets all blog posts.
        /// </summary>
        /// <returns>A action result containing a list of all blog post, see <see cref="BlogPostModel"/>.</returns>
        [AllowAnonymous]
        [HttpGet]
        public ActionResult<List<BlogPostModel>> Get()
        {
            var blogPosts = this.getPublishedBlogPostsListQuery.Execute();

            return this.Ok(blogPosts);
        }
    }
}
