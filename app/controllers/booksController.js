const axios = require("axios");
const apikey = process.env.BOOKAPIKEY;

const db = require("../../models");
const Books = db.Books;
//const { Op } = require('sequelize');

exports.bookHome = (req, res) => {
    res.render('./partials/content');
}

exports.bookSearch = async(req, res) => {
  console.log(req.query);
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

exports.add_book_page = async(req, res) => {
  const { title, authors, image } = req.query;

  try {
      res.render('./partials/addbook', { title, authors, image });
  } catch (err) {
      if (err.response) {
          console.log(err.response.data);
      } else if (err.request) {
          console.log(err.request);
      } else {
          console.error("Error", err.message);
      }
  }

}

//Books Table

// Post Book - Tested and Working
exports.book_create_post = async function(req, res) {
  if (!req.body.title) {
    res.status(400).send({
        message: "Book can not be empty!"
    });
    return;
  }
  
  const { title, date_read, image, author, has_read, user_id } = req.body;
  
  const newBook = await db.Books.create({
    title,
    date_read,
    image,
    author,
    has_read,
    user_id
  });
 
  const { dataValues } = newBook;
  res.render('./partials/userprofile', { readBooksByUser: [], unreadBooksByUser: [] });
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

  res.send('You removed the book from your shelf.');
};

//get all of users books, both true and false - tested and working

exports.books_findOneUser_get = async function(req, res) {

  const savedBooks = await db.Books.findAll()
  
  res.render('./partials/userprofile', { savedBooks });
};

//find a user's has_read = true books - books they read
exports.books_hasReadTrue_get = async function(req, res) {

  const readBooksByUser = await db.Books.findAll({
    where: {
      has_read: true
    }
  })
  
  res.render('./partials/userprofile', { readBooksByUser, unreadBooksByUser: [] });
 
};

//find a user's has_read = false books - books they want to read
exports.books_hasReadFalse_get = async function(req, res) {

  const unreadBooksByUser = await db.Books.findAll({
    where: {
      has_read: false
    }
  })

  console.log('got ehre');
  console.log(unreadBooksByUser);
  
  res.render('./partials/userprofile', { unreadBooksByUser, readBooksByUser: [] });
};