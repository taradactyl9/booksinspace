// Route module
const express = require('express');
const router = express.Router();

// Require controller modules.
var books_controller = require('../controllers/booksController');
// var read_controller = require('../controllers/readController');
// var reviews_controller = require('../controllers/reviewsController');
// var shelves_controller = require('../controllers/shelvesController');
var users_controller = require('../controllers/usersController');
// var wanttoread_controller = require('../controllers/wanttoreadController');

//GET home page
router.get('/', (req, res) => {
    res.render('index');
});

// USER ROUTES //

//create a user
router.post('/user', users_controller.user_create_post);

/// BOOK ROUTES ///

//test route 
router.get('/book', (req, res) => {
    res.send('this is the books route');
})

//GET user home page.
// router.get('/users/:userID/shelves', shelves_controller.shelves_findAll_get);

//Add a book - POST Request
router.post('/books', books_controller.book_create_post);

//Mark as Read/Want to Read on update
router.patch('/books/:id', books_controller.books_update_patch);

// //Rate a book - Post
// router.post('/books', books_controller.rate_create_post);

//router.patch("/", contoller.update);

//Add written review - Patch request

//router.patch("/", controller.update);

//Remove a book from shelf - delete request

router.delete("/books/:id/:shelf_id", books_controller.book_delete_post);

module.exports = router;