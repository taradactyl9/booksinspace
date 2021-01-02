// Route module
const express = require('express');
const router = express.Router();


// Require controller modules.
const books_controller = require('../controllers/booksController');
// var read_controller = require('../controllers/readController');
// var reviews_controller = require('../controllers/reviewsController');
// var shelves_controller = require('../controllers/shelvesController');
var users_controller = require('../controllers/usersController');
// var wanttoread_controller = require('../controllers/wanttoreadController');

//GET home page
router.get('/', books_controller.bookHome);

//GET book from isbndb api
router.get('/book-search', books_controller.bookSearch);

// USER ROUTES //

//create a user
router.post('/user', users_controller.user_create_post);

//Update a user
router.patch('/user/:id', users_controller.user_update_patch);

/// BOOK ROUTES ///

//GET User books
router.get('/books/user/:user_id', books_controller.books_findOneUser_get);

//GET User has_read = true books
router.get('/books/user/:user_id/read', books_controller.books_hasReadTrue_get);

//GET User has_read = false books
router.get('/books/user/:user_id/read', books_controller.books_hasReadFalse_get);

//Add a book 
router.post('/books', books_controller.book_create_post);

//Mark as Read/Want to Read on update
router.patch('/books/:id', books_controller.books_update_patch);

//Delete a book - tested and working!
router.delete("/books/:id", books_controller.book_delete_post);

module.exports = router;