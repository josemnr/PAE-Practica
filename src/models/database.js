const {config} = require('../../config');
const MongoClient = require('mongodb').MongoClient;

let db;
let isConnecting;

class Database {
    collectionName;
    constructor() {
        if(isConnecting) return;
        isConnecting = true
        MongoClient.connect(config.mongoUrl, { useUnifiedTopology: true }, (err, client) => {
            if(err){
                console.log('Failed to connect to MongoDB');
                return;
            }
            db = client.db();
            console.log('Successfully connected to MongoDB');
        });
    }

    useCollection(name){
        this.collectionName = name;
    }

    find(filters, cb){
        const collection = db.collection(this.collectionName);
        return collection.find(filters).toArray(cb);
    }
}

module.exports = Database;