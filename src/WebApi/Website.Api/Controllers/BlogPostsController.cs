//-----------------------------------------------------------------------
// <copyright file="BlogPostsController.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------
namespace Website.Api.Controllers
{
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using Website.Business.Blog;
    using Website.Business.Blog.Models;

    [Route("api/[controller]")]
    [ApiController]
    public class BlogPostsController : ControllerBase
    {
        private readonly IBlogPostsService blogPostService;

        public BlogPostsController(IBlogPostsService blogPostService)
        {
            this.blogPostService = blogPostService;
        }

        [AllowAnonymous]
        [HttpGet]
        public ActionResult<BlogPostModel> Get()
        {
            var blogPosts = this.blogPostService.GetBlogPosts();

            return this.Ok(blogPosts);
        }
    }
}
