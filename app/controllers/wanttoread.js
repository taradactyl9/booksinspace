db.wanttoread.belongsTo(db.shelves);
exports.findAll = (req, res) => {
    if (!books.length) {
        next();
    }
    res.send(wanttoread);
}

//Want to read Table
// user views want to read books - retrieve want to read books
exports.findAll = function(req, res) {
    res.send ('NOT IMPLEMENTED: Book create POST')
}
// user makes changes to want to read books -  update shelf
exports.update = function(req, res) {
    res.send ('NOT IMPLEMENTED: UPDATE shelf on PATCH')
}