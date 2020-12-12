const db = require("../models");
/* const Books = db.booksdb;
const Reviews = db.booksdb;
const Shelves = db.booksdb;
const Users = db.booksdb;
const Wanttoread = db.booksdb; */
const Op = db.Sequelize.Op;

//Books Table
// Select a book then create a book id
exports.create = (req, res) => {
   // db.books.findorCreate
   console.log('Books');
};

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

//Shelves
// user adds a book to Read/want to read - create shelves, create shelf id
exports.create = (req, res) => {
  
};


 //THESE ARE THE ROUTES THAT NEED CONTROLLERS
 
    //Add a book - POST Request
    
    //Retrieve your Shelf - GET Request

    //Add to shelf as want to read - POST route

    //Mark as Read - Patch Request

    //Rate a book - Patch Request

    //Add written review - Patch request

