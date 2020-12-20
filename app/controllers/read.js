//Read Table
var Read = require("../../models/read");
db.read.belongsTo(db.shelves);

// user views read books - retrieve read books
exports.findAll = function(req, res) {
    res.send ('NOT IMPLEMENTED: Book create POST')
}
// user makes changes to read books -  update shelf PATCH
exports.update = function(req, res) {
    res.send ('NOT IMPLEMENTED: UPDATE shelf on PATCH')
}
