const express = require("express");
const ejs = require('ejs');
const app = express();
const port = 3000;
const path = require('path'); // path needed to tell express to look for project folders inside of /app
const sequelize = require("sequelize");
//const sequelize = require("sequelize")

const dotenv = require('dotenv');
dotenv.config();

//Middleware

app.set('views', path.join(__dirname, 'app/views')); // sets the views, or template layouts for ejs
app.set('view engine', 'ejs'); // tells express to use ejs as templating engine
app.use(express.static('app/static')); // tells express to look in app/static for css, img, or js files

//const db = require("");
//db.sequelize.sync();

//Passport Authentication
const passport = require('passport');
const GitHubStrategy = require('passport-github');
const session = require('express-session');

//Passport Session Setup 
app.use(session({
    secret:'abc123', 
    resave: false, 
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

//Use the GitHub Strategy within Passport
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL
}, function(accessToken, refreshToken, profile, done){
    return done(null, profile);
}))

//Requiring the routes
var routes = require("./app/routes/routes");
app.use('/booksinspace', routes);

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, function() {
    console.log('Books in Space API is now listening on port 3000...');
});

