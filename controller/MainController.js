const Book = require('../Model/book');


exports.getAllBooks = (req,res,next) =>{
    Book.fetchAllBooks()
    .then(books => {
       res.render('books', {
        books:books
       })
    })
    .catch(err => {
        console.log(err);
    })
     
}

exports.postAddBook = (req,res,next) => {
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const publisher = req.body.publisher;

    const book = new Book(
        title,
        price,
        description,
        publisher,

    );
    book
     .saveBook()
     .then(result =>{
        console.log("Book Added.");
        res.sendStatus(200)
     })
     .catch(err => {
        console.log(err);
     })
    

}
exports.postUpdateBook = (req,res,next) => {
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const publisher = req.body.publisher;
    const id = req.body.id;

    const book = new Book(
        title,
        price,
        description,
        publisher,
        id
    );
    book.saveBook()
    .then(result => {
        console.log("Book Updated.");
        res.sendStatus(200);
    })
   .catch(err => {
    console.log(err);
   })

   
}
exports.postDeleteBook = (req,res,next) =>{
    const bookId = req.body.id;
    Book.deleteById(bookId)
    .then(() => {
       console.log("Book Deleted.");
       res.sendStatus(200)
    })
    .catch(err => console.log(err));
    
  }

 