const db = require("../../models");
const Books = db.Books;
const Sequelize = require('sequelize');

//const Op = db.Sequelize.Op;
// db.books.belongsTo(db.users);
// var primaryId = 1;


//Books Table
// Save book to shelves on POST
 exports.books_create_post = function(req, res) {
  if (!req.body.title) {
    res.status(400).send({
        message: "Book can not be empty!"
    });
    return;
  }

  const { title } = req.body;
  const { user_id } = req.body;
  const { date_read } = req.body


  const newBook = db.Books.create({
   title,
   user_id
  })
  res.send(
    'This book has been added!'
  )
};

// Mark it as Read/Want to read on UPDATE
exports.books_update_patch = function(req, res) {
  const book_id = req.params.book_id;
  Books.update({
  title: req.body.title,
  user_id: req.body.user_id,
  date_read: req.body.date_read,
  status: req.body.status}, {where: {status: req.params.status} }).then(() => {
    res.status(200).send("updated book status = " + status);
  });
 

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
}
