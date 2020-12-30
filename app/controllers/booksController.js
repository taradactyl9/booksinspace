const db = require("../../models");
const Books = db.Books;
const Sequelize = require('sequelize');

//Home page

exports.bookHome = (req, res) => {
    res.render('layouts/index');
}

// Post a book - Tested and Working

exports.book_create_post = function(req, res) {
if (!req.body.title) {
  res.status(400).send({
      message: "Book can not be empty!"
  });
  return;
}

const { title, user_id, date_read, status, shelf_id } = req.body;

const newBook = db.Books.create({
  title,
  user_id,
  date_read,
  status,
  shelf_id
});

}

// Update a Book

exports.books_update_patch = function(req, res) { // TESTED & WORKING
    const { id } = req.params;

    const updatedBook = db.Books.update(req.body, {
        where: {
            id
        }
    });

    res.send('This book is updated');
};

// Delete a book 

exports.book_delete_post = function(req, res) {
  const { id } = req.params;
  
  const deletedBook = db.Books.destroy({
   where: {
     id
   }
  })
  res.json(deletedBook)
};
 
