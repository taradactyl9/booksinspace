// Route module
const express = require('express');
const router = express.Router();

// Require controller modules.
var books_controller = require('../controllers/booksController');
var read_controller = require('../controllers/readController');
var reviews_controller = require('../controllers/reviewsController');
var shelves_controller = require('../controllers/shelvesController');
var users_controller = require('../controllers/usersController');
var wanttoread_controller = require('../controllers/wanttoreadController');

/// BOOK ROUTES ///

//GET user home page.
router.get('/'. shelves_controller.shelves_findAll_get);

//Add a book - POST Request
router.post('/books/create', books_controller.books_create_post);

//Mark as Read/Want to Read on update
router.patch('/books/update', books_controller.book_update_patch);

//Rate a book - Post
router.post('/books/create', books_controller.rate_create_post);

//router.patch("/", contoller.update);

//Add written review - Patch request

//router.patch("/", controller.update);

//Delete a book from shelf - delete request

//router.delete("/", controller.delete);
app.use('/routes', routes);

module.exports = router;