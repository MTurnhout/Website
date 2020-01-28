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
    using Website.Application.Blog;
    using Website.Common.Blog.Models;

    /// <summary>
    /// A Web API controller that provides access to blog post data.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class BlogPostsController : ControllerBase
    {
        private readonly IBlogPostsService blogPostService;

        /// <summary>
        /// Initializes a new instance of the <see cref="BlogPostsController"/> class.
        /// </summary>
        /// <param name="blogPostService">A instance of <see cref="IBlogPostsService"/>.</param>
        public BlogPostsController(IBlogPostsService blogPostService)
        {
            this.blogPostService = blogPostService;
        }

        /// <summary>
        /// Gets all blog posts.
        /// </summary>
        /// <returns>A action result containing a list of all blog post, see <see cref="BlogPostModel"/>.</returns>
        [AllowAnonymous]
        [HttpGet]
        public ActionResult<List<BlogPostModel>> Get()
        {
            var blogPosts = this.blogPostService.GetBlogPosts();

            return this.Ok(blogPosts);
        }
    }
}
