using Microsoft.AspNetCore.Mvc;
using System.Repository;

namespace System.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController
    {
        public readonly MongoRepository _repository;

        public UserController(MongoRepository repository)
        {
            _repository = repository;
        }
    }
}
