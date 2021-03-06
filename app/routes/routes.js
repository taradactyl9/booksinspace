// Route module
const express = require('express');
const router = express.Router();


// Require controller modules.
const books_controller = require('../controllers/booksController');
const users_controller = require('../controllers/usersController');
// var read_controller = require('../controllers/readController');
// var reviews_controller = require('../controllers/reviewsController');
// var shelves_controller = require('../controllers/shelvesController');
// var wanttoread_controller = require('../controllers/wanttoreadController');

//GET home page
router.get('/', books_controller.bookHome);

//GET book from isbndb api
router.get('/book-search', books_controller.bookSearch);

//add book page
router.get('/addbook', books_controller.add_book_page)

// USER ROUTES //

//user profile page
router.get('/userprofile', users_controller.user_profile_page);

// register a new user
router.get('/register', users_controller.user_register_page);

//create a user
router.post('/user', users_controller.user_create_post);

//Update a user
router.patch('/user/:id', users_controller.user_update_patch);

/// BOOK ROUTES ///

//GET User books
router.get('/books/user/:user_id', books_controller.books_findOneUser_get);

//GET User has_read = true books
router.get('/read', books_controller.books_hasReadTrue_get);

//GET User has_read = false books
router.get('/unread', books_controller.books_hasReadFalse_get);

//Add a book 
router.post('/books', books_controller.book_create_post);

//Mark as Read/Want to Read on update
router.post('/books/update/:id', books_controller.books_update_patch);

//Delete a book 
router.post("/books/:id", books_controller.book_delete_post);

router.get("/terms", (req, res) => {
    res.render("./partials/terms")
})

module.exports = router;