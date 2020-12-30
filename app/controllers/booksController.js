const axios = require("axios");
const apikey = process.env.BOOKAPIKEY;

const db = require("../../models");
const Books = db.Books;
const Sequelize = require('sequelize');

// const Op = db.Sequelize.Op;
// db.books.belongsTo(db.users);
// var primaryId = 1;

//Shelves 

exports.bookHome = (req, res) => {
    res.render('./partials/content');
}


exports.bookSearch = async(req, res) => {

    try {

        let data = '';
        const bookname = req.query.booktitle.split(' ').join('+');

        const config = {
            method: 'get',
            url: `https://api2.isbndb.com/books/${bookname}?page=1&pageSize=20&beta=0`,
            headers: {
                'Authorization': `${apikey}`
            },
            data: data
        };

        const bookAPI = await axios.request(config);
        const bookData = bookAPI.data;

        res.render('partials/booksearch', { bookData: bookData.books });


    } catch (err) {
        if (err.response) {
            console.log(err.response.data);
        } else if (err.request) {
            console.log(err.request);
        } else {
            console.error("Error", err.message);
        }
    }

    res.end();

};

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

// // Change a book review on UPDATE
// exports.review_update_patch = function(req, res) {
//   if (!req.body.status) {
//     res.status(400).send({
//         message: "No changes saved."
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
//     'This review has been updated.')
// };

// // Add a book read date on POST
// exports.readdate_create_post = function(req, res) {
//   if (!req.body.status) {
//     res.status(400).send({
//         message: ""
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
//   res.send('This book has been saved to your shelf.')

// };

// // Change a book read date on UPDATE
// exports.readdate_update_patch = function(req, res) {
//   if (!req.body.status) {
//     res.status(400).send({
//         message: ""
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
//   res.send('This book has been updated.')
// };

// // Remove a book from shelf
// exports.book_delete_post = function(req, res) {
//   if (!req.body.status) {
//     res.status(400).send({
//         message: "No changes made."
//     });
//     return;
//   }

//   const { title } = req.body;
//   const { user_id } = req.body;
//   const { date_read } = req.body
//   const { status } = req.body


//   const newBook = db.Books.delete({
//    title,
//    user_id,
//    date_read,
//    status
//   })
//   res.send('This book has been removed.')
// };









//  //THESE ARE THE ROUTES THAT NEED CONTROLLERS

//     //Add a book - POST Request

//     //Retrieve your Shelf - GET Request

//     //Add to shelf as want to read - POST route

//     //Mark as Read - Patch Request

//     //Rate a book - Patch Request

//     //Add written review - Patch request