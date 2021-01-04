const db = require("../../models");
const Users = db.Users;
const Sequelize = require('sequelize');

//User Table


exports.user_profile_page = async(req, res) => {

    try {
        const results = res.render('./partials/userprofile');
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

exports.user_register_page = (req, res) => {
    try {
        res.render('./partials/register');
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

// user signs up - tested and working
exports.user_create_post = async function(req, res) {
    console.log(req.body);

    try {
        if (!req.body.email || !req.body.password) {
            res.status(400).send({
                message: "You need an email & password to create an account!"
            });
            return;
        }

        const { email, name, password } = req.body;

        const User = await db.User.create({
            password,
            email,
            name
        });

        res.render('./partials/userprofile', { name: name, email: email });

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