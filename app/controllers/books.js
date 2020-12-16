const db = require("../models");
const Op = db.Sequelize.Op;
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
  
   // Save book to shelves
   booksdb.create()
   .then(data => {
     res.send(data);
   })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Some error occurred while saving book."
     });
   });

// Mark it as Read/Want to read
exports.update = (req, res) => {
  
};

// Rate a book 1st time
exports.create = (req, res) => {
  
};

// Change a book rating
exports.update = (req, res) => {
  
};

// Review a book 
exports.create = (req, res) => {
  
};

// Change a book review
exports.update = (req, res) => {
  
};

// Add a book read date
exports.create = (req, res) => {
  
};

// Change a book read date
exports.update = (req, res) => {
  
};

// Remove a book from shelf
exports.delete = (req, res) => {
  
};









 //THESE ARE THE ROUTES THAT NEED CONTROLLERS
 
    //Add a book - POST Request
    
    //Retrieve your Shelf - GET Request

    //Add to shelf as want to read - POST route

    //Mark as Read - Patch Request

    //Rate a book - Patch Request

    //Add written review - Patch request

