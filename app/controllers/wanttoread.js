exports.findAll = (req, res) => {
    if (!books.length) {
        next();
    }
    res.send(wanttoread);
}

//Want to read Table
// user views want to read books - retrieve want to read books
exports.retrieveAll = (req, res) => {

}
// user makes changes to want to read books -  update shelf
exports.update = (req, res) => {

};