using Microsoft.AspNetCore.Mvc;
using server.Repository.Models;
using System.Repository;

namespace System.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController: ControllerBase
    {
        public readonly MongoRepository _repository;
        private readonly IConfiguration _configuration;

        public UserController(MongoRepository repository, IConfiguration configuration)
        {
            _repository = repository;
            _configuration = configuration;

        }
        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                List<User> users = _repository.UserService.GetAll();
                return Ok(users);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("{id")]
        public IActionResult Get(string id)
        {
            User user = _repository.UserService.Get(id);
            return Ok(user);
        }

        [HttpPost]
        public ActionResult<User> Create(User user)
        {
            try
            {
                _repository.UserService.Create(user);
                return Ok(user);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public ActionResult<User> Update(string userId, User user)
        {
            try
            {
                _repository.UserService.Update(userId, user);
                return Ok(user);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        public ActionResult Delete(string id)
        {
            try
            {
                _repository.UserService.Delete(id);
                return Ok($"Success deleting user: {id}");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
