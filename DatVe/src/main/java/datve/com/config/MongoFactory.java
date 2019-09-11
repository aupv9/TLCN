package datve.com.config;

import com.mongodb.*;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Component;

@Component
public class MongoFactory {
    private static Logger log = Logger.getLogger(MongoFactory.class);

    //Connect String tới atlas
    private static  MongoClientURI uri = new MongoClientURI(
                    "mongodb://root:batman2019@projecttlcn-shard-00-00-cycnq.mongodb.net:27017,projecttlcn-shard-00-01-cycnq.mongodb.net:27017," +
                            "projecttlcn-shard-00-02-cycnq.mongodb.net:27017/test?ssl=true&replicaSet=ProjectTLCN-shard-0&authSource=admin&retryWrites=true&w=majority");

    private static MongoClient mongoClient;

    private MongoFactory() { }

    // Returns a mongo instance.
    public static MongoClient getMongo() {

        if (mongoClient == null) {
            try{
                mongoClient =  new MongoClient(uri);
            } catch (MongoException ex) {
                log.error(ex);
            }
        }
        return mongoClient;
    }

    // Fetches the mongo database.
    public static MongoDatabase getDB(String db_name) {
        return getMongo().getDatabase(db_name);
    }

    // Fetches the collection from the mongo database.
    public static MongoCollection<?> getCollection(String db_name, String db_collection) {
        return getDB(db_name).getCollection(db_collection);
    }

    //đóng mongo client
    public  static  void closeConnect(){
        mongoClient.close();

    }
}
