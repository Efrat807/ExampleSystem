using MongoDB.Driver;
using server.Repository.Models;
using server.Repository.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Repository
{
    public class MongoRepository
    {
        private readonly IMongoDatabase database;
        private readonly IMongoCollection<User> users;

        public UserService UserService { get; set; }
        public MongoRepository(IDataBaseSettings dataBaseSettings) 
        {
            var clientSystem = new MongoClient(dataBaseSettings.ConnectionString);
            database = clientSystem.GetDatabase(dataBaseSettings.DatabaseName);
            users = database.GetCollection<User>(dataBaseSettings.CollectionNames.Users);

            UserService = new UserService(users);
        }
    }
}
