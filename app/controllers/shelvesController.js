const db = require("../../models");
const Books = db.Books;
const Sequelize = require('sequelize');

//User creates a shelf
// exports. = function(req, res) {
//     if (!req.body.title) {
//       res.status(400).send({
//           message: "Book can not be empty!"
//       });
//       return;
//     }
    
//     const { title, user_id, date_read, status, shelf_id } = req.body;
    
//     const newBook = db.Books.create({
//       title,
//       user_id,
//       date_read,
//       status,
//       shelf_id
//     });
    
//     res.send(
//       'This book has been added!'
//     )
//     };
// user adds a book to Read/want to read - create shelves, create shelf id
// exports.shelves_create_post = function(req, res) {
//     res.send('NOT IMPLEMENTED: shelf id create POST')
//  };

// // user changes want to read book to read- update shelf
// exports.shelves_update_patch = function(req, res) {
//     res.send('NOT IMPLEMENTED: Update shelf PATCH')
//   };

// // user views all shelves with all books
// exports.shelves_findAll_get = function(req, res) {
//   res.send('NOT IMPLEMENTED: list all shelves GET')
// };

