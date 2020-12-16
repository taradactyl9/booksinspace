const express = require('express');
const router = require("express").Router();
const controller = require("..controllers/controller.js"); //Placeholder


router.get('/', (req, res) => {
    res.render('index');
});

//Add a book - POST Request

//router.post('/', controller.create); //PLACEHOLDER 

//Retrieve your Shelf - GET Request

//router.get("/", controller.findAll); // PLACEHOLDER

//Add to shelf as want to read - POST route

//router.post("/", controller.update); //PLACEHOLDER

//Mark as Read - Patch Request

//router.patch("/", controller.update); //PLACEHOLDER

//Rate a book - Patch Request

//router.patch("/", contoller.update);

//Add written review - Patch request

//router.patch("/", controller.update);

//Delete a book from shelf - delete request

//router.delete("/", controller.delete);

module.exports = router;