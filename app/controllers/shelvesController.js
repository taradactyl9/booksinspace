var shelves = require("../../models/shelves");
// Used to assign unique ids to each order
var primaryId = 1;

//Shelves
// user adds a book to Read/want to read - create shelves, create shelf id
exports.shelves_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: shelf id create POST')
 };

// user changes want to read book to read- update shelf
exports.shelves_update_patch = function(req, res) {
    res.send('NOT IMPLEMENTED: Update shelf PATCH')
  };

// user views all shelves with all books
exports.shelves_findAll_get = function(req, res) {
  res.send('NOT IMPLEMENTED: list all shelves GET')
};

