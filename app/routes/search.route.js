const express = require('express');
const router = require("express").Router();
const controller = require("..controllers/controller.js"); //Placeholder

// GET localhost:9000/endpoint
router.get('/endpoint', async(req, res) => {
    // requesting data from 3rd party service
    const response = await got('https://thirdpartyservice.com/api', {
        headers: {
            'x-auth-token': apiKey, // the auth token header
            json: true, // assuming response will be "application/json"
        },
    });


});



module.exports = router;