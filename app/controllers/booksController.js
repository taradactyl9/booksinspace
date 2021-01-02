const axios = require("axios");
const apikey = process.env.BOOKAPIKEY;

const db = require("../../models");
const Books = db.Books;
//const { Op } = require('sequelize');

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

// Post Book - Tested and Working
exports.book_create_post = async function(req, res) {
  if (!req.body.title) {
    res.status(400).send({
        message: "Book can not be empty!"
    });
    return;
  }

  const { title, user_id, date_read, status, shelf_id, has_read } = req.body;

  const newBook = await db.Books.create({
    title,
    user_id,
    date_read,
    status,
    shelf_id,
    has_read
  });

  res.json(newBook);
}

// Update a Book - tested and working

exports.books_update_patch = async function(req, res) { // TESTED & WORKING
    const { id } = req.params;

    const updatedBook = await db.Books.update(req.body, {
        where: {
            id
        }
    });

    res.json(updatedBook);
};

// Delete a book - tested and working

exports.book_delete_post = async function(req, res) {
  const { id } = req.params;
  
  const deletedBook = await db.Books.destroy({
   where: {
     id
   }
  })

  res.json(deletedBook);
};

//get all of users books, both true and false - tested and working

exports.books_findOneUser_get = async function(req, res) {
  const { user_id } = req.params;


  const savedBooksByUser = await db.Books.findAll({
    where: {
      user_id
    }
  })
  
  res.json(savedBooksByUser)
};

//find a user's has_read = true books 
exports.books_hasReadTrue_get = async function(req, res) {
  const { user_id, has_read } = req.params;

  const readBooksByUser = await db.Books.findAll({
    where: {
      user_id,
      has_read: true
    }
  })
  
  res.json(readBooksByUser)
};

//find a user's has_read = false books 
exports.books_hasReadFalse_get = async function(req, res) {
  const { user_id, has_read } = req.params;

  const unreadBooksByUser = await db.Books.findAll({
    where: {
      user_id,
      has_read: false
    }
  })
  
  res.json(unreadBooksByUser)
};