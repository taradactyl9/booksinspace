// Global variables for our prototype
var users = require("../../models/users");
db.users.hasMany(db.books);
// Used to assign unique ids to each order
var primaryId = 1;

//User Table
// user signs up - create userid, username, email, name, location, acct creation date
exports.create = function(req, res) {
  res.send ('NOT IMPLEMENTED: user acct create POST')
};

// user logs in 1st - create login date POST
exports.create = function(req, res) {
  res.send('NOT IMPLEMENTED: login date created')
};

// user logs in - update login date PATCH
exports.update = function(req, res) {
  res.send('NOT IMPLEMENTED: user login date update PATCH')
};


// user deletes acct POST
exports.deleteAll = function(req, res) {
  res.send('NOT IMPLEMENTED: user deletes acct POST')
};

// user visits profile page - retrieve user library GET
exports.retrieveAll = function(req, res) {
  res.send('NOT IMPLEMENTED: user retrieves all books for profile page GET')
}
