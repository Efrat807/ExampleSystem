
using MongoDB.Bson;
using MongoDB.Driver;
using server.Repository.Models;

namespace server.Repository.Services
{
    public class UserService
    {
        private readonly IMongoCollection<User> _users;

        public UserService(IMongoCollection<User> users)
        {
            _users = users;
        }
        public List<User> GetAll() { return _users.Find(_=>true).ToList(); }
        public User Get(string id)
        {
            return _users.Find((user)=> user.Id == id).First();
        }
        public void Update(string userId, User user)
        {
            _users.ReplaceOne(user => user.Id == userId, user);
        }
        public void Delete(string userId)
        {
            _users.DeleteOne(userId);
        }
        public void Create(User user) {
            _users.InsertOne(user);
        }
    }
}
