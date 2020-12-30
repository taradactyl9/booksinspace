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

exports.user_update_patch = function(req, res) {
    // if (!req.body.username || !req.body.password) {
    //     res.status(400).send({
    //         message: "Need username and password"
    //     })
    // return;
    // }
    const { id } = req.params;

    const updatedUser = db.User.update(req.body, {
        where: {
            id
        }
    })

    res.send('Your user has been updated');
}
