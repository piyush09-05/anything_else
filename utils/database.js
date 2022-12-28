const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
 
let _db;
const mongoConnect = callback => {
    MongoClient.connect(
        'mongodb+srv://piyush09:Piyush123@cluster0.qaiji4j.mongodb.net/?retryWrites=true&w=majority'
    )
    .then(client => {
        console.log("Connected");
        _db = client.db();
        callback();
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
};

const getDb = () => {
    if(_db){
        return _db;
    }
    else{
        throw 'No Database Found'
    }
};
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;