const db = require("../../models");
const Books = db.Books;
const Sequelize = require('sequelize');

// const Op = db.Sequelize.Op;
// db.books.belongsTo(db.users);
// var primaryId = 1;


//Books Table
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
//Shelves 

exports.bookHome = (req, res) => {
    res.render('layouts/index');
}



//Books Table
// Save book to shelves on POST - Tested and Working
exports.books_create_post = function(req, res) {
    if (!req.body.title) {
        res.status(400).send({
            message: "Book can not be empty!"
        });
        return;
    }

    const { title, user_id, date_read, status } = req.body;

    const newBook = db.Books.create({
        title,
        user_id,
        date_read,
        status
    });

    res.send(
        'This book has been added!'
    )
};

// Update a Shelved Book

exports.books_update_patch = function(req, res) { // TESTED & WORKING
    const { id } = req.params;

    const updatedBook = db.Books.update(req.body, {
        where: {
            id
        }
    });

    res.send('This book is updated');
};



// Delete a book from shelf

exports.book_delete_post = function(req, res) {
  const { id, shelf_id } = req.params;
  
  const deletedBook = db.Books.destroy({
   where: {
     id,
     shelf_id
   }
  })
  res.json(deletedBook)
};
 

// exports.shelves_controller.shelves_findAll_get = function(req, res) {
//   const { user_id } = req.params;

//   db.Books.
// }

// // Rate a book 1st time on POST
// exports.rate_create_post = function(req, res) {
//   if (!req.body.status) {
//     res.status(400).send({
//         message: "No rating selected"
//     });
//     return;
//   }

//   const { title } = req.body;
//   const { user_id } = req.body;
//   const { date_read } = req.body
//   const { status } = req.body


//   const newBook = db.Books.post({
//    title,
//    user_id,
//    date_read,
//    status
//   })
//   res.send(
//     'This book has been added to shelf!'
//   )
//   };

// // Change a book rating on UPDATE
// exports.rating_update_patch = function(req, res) {
//   if (!req.body.status) {
//     res.status(400).send({
//         message: "No rating selected"
//     });
//     return;
//   }

//   const { title } = req.body;
//   const { user_id } = req.body;
//   const { date_read } = req.body
//   const { status } = req.body


//   const newBook = db.Books.update({
//    title,
//    user_id,
//    date_read,
//    status
//   })
//   res.send(
//     'Book has been updated.'
//   )

// };

// // Review a book on POST
// exports.review_create_post = function(req, res) {
//   if (!req.body.status) {
//     res.status(400).send({
//         message: "No review saved."
//     });
//     return;
//   }

//   const { title } = req.body;
//   const { user_id } = req.body;
//   const { date_read } = req.body
//   const { status } = req.body


//   const newBook = db.Books.create({
//    title,
//    user_id,
//    date_read,
//    status
//   })
//   res.send(
//     'This review has been saved.'
//   )
//   };











//  //THESE ARE THE ROUTES THAT NEED CONTROLLERS

//     //Add a book - POST Request

//     //Retrieve your Shelf - GET Request

//     //Add to shelf as want to read - POST route

//     //Mark as Read - Patch Request

//     //Rate a book - Patch Request

//     //Add written review - Patch request
