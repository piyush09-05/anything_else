const express = require("express");

const router = express.Router();
const MainController = require("../controller/MainController");

//Adding Book(Create)
router.post('/Add', MainController.postAddBook )

// Getting all Books(Read)
router.get('/', MainController.getAllBooks)

//updating book (Update)
router.post('/update', MainController.postUpdateBook)

// deleting book (Delete)
router.post('/delete', MainController.postDeleteBook)

module.exports = router;