const express = require("express");
const ejs = require('ejs');
const app = express();
const port = 3000;
const path = require('path'); // path needed to tell express to look for project folders inside of /app
const sequelize = require("sequelize");
//const sequelize = require("sequelize")

//Middleware

app.set('views', path.join(__dirname, 'app/views')); // sets the views, or template layouts for ejs
app.set('view engine', 'ejs'); // tells express to use ejs as templating engine
app.use(express.static('app/static')); // tells express to look in app/static for css, img, or js files

const db = require("./models");
db.sequelize.sync();

app.listen(port, function() {
    console.log('Books in Space API is now listening on port 3000...');
})