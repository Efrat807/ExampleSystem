using MongoDB.Driver;
using Serilog;
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
            Log.Information("hello to everyone!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            var clientSystem = new MongoClient(dataBaseSettings.ConnectionString);
            database = clientSystem.GetDatabase(dataBaseSettings.DatabaseName);
            users = database.GetCollection<User>(dataBaseSettings.CollectionNames.Users);

            UserService = new UserService(users);
            List<User> usersList = UserService.GetAll();
            Log.Information(usersList[0].Name + "ldkfjs;od ifjsd oighwe985t7w05874w3itpoerwigsdohoweg98y45oigfuwehorfi8yw4398try40298gfoaiuhwfo09e8rhfowe9u8fho34o08gt3");

            UserService.Create(new User { Name = "Jakov" });
        }
    }
}
