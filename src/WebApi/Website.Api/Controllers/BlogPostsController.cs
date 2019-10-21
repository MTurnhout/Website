using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Website.Business.Blog;
using Website.Business.Blog.Models;

namespace Mt.Website.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogPostsController : ControllerBase
    {
        private readonly IBlogPostsService _blogPostService;

        public BlogPostsController(IBlogPostsService blogPostService)
        {
            _blogPostService = blogPostService;
        }

        [AllowAnonymous]
        [HttpGet]
        public ActionResult<BlogPostModel> Get()
        {
            var blogPosts = _blogPostService.GetBlogPosts();

            return Ok(blogPosts);
        }
    }
}
