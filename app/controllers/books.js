var Books = require("../../models/books");
// const Op = db.Sequelize.Op;
db.books.belongsTo(db.users);
var primaryId = 1;


//Books Table
// Select a book then create a book id
exports.create = (req, res) => {
    // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
};

const books = {
    book_id: req.body.id,
    title: req.body.title,
    user_id: req.body.user_id,
    date_read: req.body.date_read, 
    shelf_id: req.body.shelf_id
  };
  
   // Save book to shelves on POST
   exports.create = function(req, res) {
      res.send ('NOT IMPLEMENTED: Book create POST')
   };

// Mark it as Read/Want to read on UPDATE
exports.update = function(req, res) {
  res.send('NOT IMPLEMENTED: Book update PATCH')
};

// Rate a book 1st time on POST
exports.create = function(req, res) {
  res.send('NOT IMPLEMENTED: Book rating CREATE')
};

// Change a book rating on UPDATE
exports.update = function(req, res) {
  res.send('NOT IMPLEMENTED: Book rating update PATCH')
};

// Review a book on POST
exports.create = function(req, res) {
  res.send('NOT IMPLEMENTED: Book review create POST')
};

// Change a book review on UPDATE
exports.update = function(req, res) {
  res.send('NOT IMPLEMENTED: Book review update PATCH')
};

// Add a book read date on POST
exports.create = function(req, res) {
  res.send('NOT IMPLEMENTED: Book date create POST')
};

// Change a book read date on UPDATE
exports.update = function(req, res) {
  res.send('NOT IMPLEMENTED: Book date update PATCH')
};

// Remove a book from shelf
exports.delete = function(req, res) {
  res.send('NOT IMPLEMENTED: Book delete POST')
};









 //THESE ARE THE ROUTES THAT NEED CONTROLLERS
 
    //Add a book - POST Request
    
    //Retrieve your Shelf - GET Request

    //Add to shelf as want to read - POST route

    //Mark as Read - Patch Request

    //Rate a book - Patch Request

    //Add written review - Patch request

