const mongodb = require('mongodb');

const getDb = require('../utils/database').getDb;

class Book{
    constructor(title, price, description, publisher, id){
        this.title = title;
        this.price = price;
        this.description = description;
        this.publisher = publisher;
        this._id = id? new mongodb.ObjectId(id) : null;
    
    }

    saveBook(){
        const db = getDb();
        let dbOp;
        
        if(this._id){
            // update the book
            dbOp = db
            .collection('books')
            .updateOne({_id:this._id}, { $set:this});
        }
        else{
            // add the book
            dbOp = db.collection('books').insertOne(this);
        }
        return dbOp.then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
    }

    static deleteById(bookId){
        const db = getDb();
        return db
        .collection('books')
        .deleteOne({_id:new mongodb.ObjectId(bookId)})
        .then(result => {
            console.log("Book Deleted")
        })
        .catch(err => {
            console.log(err)
        });
    }

    static fetchAllBooks(){
        const db = getDb();
        return db
        .collection('books')
        .find()
        .toArray()
        .then(books => {
            // console.log(books);
            return books;
        })
        .catch(err => {
            console.log(err);
        })
    }
}
module.exports = Book;