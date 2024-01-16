using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Repository
{
    public class MongoDatabaseSettings
    {
        public string ConnectioString { get; set; } = null!;
        public string DatabaseName { get; set; } = null!;
        public MongoCollectionNames CollectionNames { get; set; } = null!;

    }
    public interface IDataBaseSettings
    { 
        public string ConnectionString { get; set; }
        string DatabaseName { get; set; }
        public MongoCollectionNames CollectionNames { get; set; }
    }
    public class MongoCollectionNames
    {
        public string Users { get; set; } = null!;
    }

}
