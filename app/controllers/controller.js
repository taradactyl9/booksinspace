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
    db.books.findorCreate
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

//User Table
// user signs up - create username, email, id, name, location, acct creation date
exports.create = (req, res) => {
  
};

// user logs in - create login date
exports.create = (req, res) => {
  
};

// user deletes account
exports.deleteAll = (req, res) => {
  
};

// Profile view
exports.findAll = (req, res) => {
  
};

//Shelves Table
// user adds to read - create read shelf, create shelf id
exports.create = (req, res) => {
    db.books.findorCreate
};

// user adds to want to read - create want to read shelf, create shelf id
exports.create = (req, res) => {
  
};

// Update a book status - update shelf/change shelf
exports.update = (req, res) => {
  
};

