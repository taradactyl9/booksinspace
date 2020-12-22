var books = require("../../models/books");
// const Op = db.Sequelize.Op;
// db.books.belongsTo(db.users);
var primaryId = 1;


//Books Table
// Select a book then create a book id
exports.book_create_get = (req, res) => {
    // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
};

// Save book to shelves on POST
 exports.book_create_post = function(req, res) {
   res.send ('NOT IMPLEMENTED: Book create POST')
  };

// Mark it as Read/Want to read on UPDATE
exports.book_update_patch = function(req, res) {
  res.send('NOT IMPLEMENTED: Book update PATCH')
};

// Rate a book 1st time on POST
exports.rate_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Book rating CREATE')
};

// Change a book rating on UPDATE
exports.rating_update_patch = function(req, res) {
  res.send('NOT IMPLEMENTED: Book rating update PATCH')
};

// Review a book on POST
exports.review_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Book review create POST')
};

// Change a book review on UPDATE
exports.review_update_patch = function(req, res) {
  res.send('NOT IMPLEMENTED: Book review update PATCH')
};

// Add a book read date on POST
exports.readdate_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Book date create POST')
};

// Change a book read date on UPDATE
exports.readdate_update_patch = function(req, res) {
  res.send('NOT IMPLEMENTED: Book date update PATCH')
};

// Remove a book from shelf
exports.book_delete_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Book delete POST')
};









 //THESE ARE THE ROUTES THAT NEED CONTROLLERS
 
    //Add a book - POST Request
    
    //Retrieve your Shelf - GET Request

    //Add to shelf as want to read - POST route

    //Mark as Read - Patch Request

    //Rate a book - Patch Request

    //Add written review - Patch request

