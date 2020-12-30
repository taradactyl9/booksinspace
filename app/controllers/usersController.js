const db = require("../../models");
const Users = db.Users;
const Sequelize = require('sequelize');

//User Table
// user signs up - create userid, username, email, name, location, acct creation date
exports.user_create_post = function(req, res) {
    console.log(req.body);
        if(!req.body.email || !req.body.password) {
        res.status(400).send({
            message: "You need an email & password to create an account!"
        });
    return;
    }

    const { email, name, password } = req.body;

    const newUser = db.User.create({
        email,
        name, 
        password
    });

    res.send(
        "YAY! Your account is created!"
    )
}

// // user logs in 1st - create login date POST
// exports.login_create_post = function(req, res) {
//   res.send('NOT IMPLEMENTED: login date created')
// };

// // user logs in - update login date PATCH
// exports.login_update_patch = function(req, res) {
//   res.send('NOT IMPLEMENTED: user login date update PATCH')
// };


// // user deletes acct POST
// exports.user_deleteAll_post = function(req, res) {
//   res.send('NOT IMPLEMENTED: user deletes acct POST')
// };

// // user visits profile page - retrieve user library GET
// exports.user_retrieveAll_get = function(req, res) {
//   res.send('NOT IMPLEMENTED: user retrieves all books for profile page GET')
// }
