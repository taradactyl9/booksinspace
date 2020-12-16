// Global variables for our prototype
var users = [];
db.users.hasMany(db.books);
// Used to assign unique ids to each order
var primaryId = 1;

//User Table
// user signs up - create userid, username, email, name, location, acct creation date
exports.create = (req, res) => {
     // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
};
const users = {
    user_id: req.body.id,
    username: req.body.username,
    email: req.body.email,
    name: req.body.name, 
    location: req.body.location,
    created_at: req.body.created_at
  };
  
   // Save book to shelves
   booksdb.users.create({
       name: 'Tara',
       username: 'testuser1',
       email: 'taradavies+1@gmail.com',
       name: 'Tara Test',
       location: 'Georgia',
   })
   .then(data => {
    //  res.send(data);
    console.log(`New user ${data.username}, with id ${data.user_id} has been created.`);
   })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Some error occurred while creating user."
     });
   });


// user logs in 1st - create login date
exports.create = (req, res) => {
  
};

// user logs in - update login date
exports.create = (req, res) => {
  
};

// user deletes acct 
exports.deleteAll = (req, res) => {
  
};

// user visits profile page - retrieve user library
exports.retrieveAll = (req, res) => {

}
