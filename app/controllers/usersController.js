const db = require("../../models");
const Users = db.Users;
const Sequelize = require('sequelize');

//User Table

// user signs up - tested and working
exports.user_create_post = async function(req, res) {
    console.log(req.body);
        if(!req.body.email || !req.body.password) {
        res.status(400).send({
            message: "You need an email & password to create an account!"
        });
    return;
    }

    const { email, name, password } = req.body;

    const newUser = await db.User.create({
        email,
        name, 
        password
    });

    res.json(newUser)
}

//update user - tested and working

exports.user_update_patch = async function(req, res) {
    // if (!req.body.username || !req.body.password) {
    //     res.status(400).send({
    //         message: "Need username and password"
    //     })
    // return;
    // }
    const { id } = req.params;

    const updatedUser = await db.User.update(req.body, {
        where: {
            id
        }
    })

    res.json(updatedUser);
}
