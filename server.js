const express = require("express");
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const favicon = require('serve-favicon');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path'); // path needed to tell express to look for project folders inside of /app
const sequelize = require("sequelize");
const LocalStrategy = require('passport-local').Strategy


const dotenv = require('dotenv');
dotenv.config();

app.use(express.urlencoded({
    extended: true
}));

//Middleware
app.use(expressLayouts);
app.set('layout', './layouts/index');
app.set('view options', { layout: './layouts/layout.ejs' });
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app/views'));
app.use(favicon(__dirname + '/app/static/img/favicon.ico')); // sets the views, or template layouts for ejs
// tells express to use ejs as templating engine
app.use(express.static('app/static')); // tells express to look in app/static for css, img, or js files
app.use(express.json())
// specify local strategy to auth requests
app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

const db = require("./models");
db.sequelize.sync();

//Passport Authentication
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const session = require('express-session');

//Passport Session Setup 
app.use(session({
    secret: process.env.SECRET,
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

app.get('/github', passport.authenticate('github'));

//Use the GitHub Strategy within Passport
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL
}, 
function(accessToken, refreshToken, profile, cb) {
    db.User.findOrCreate({ githubId: profile.id }, function (err, user) {
        return cb(err, user);
    });
}))

// Local Auth Strategy
function initialize(passport,getUserByEmail){
  const authenticateUser = (email, password, done) => {
    const user = getUserByEmail(email)
    if (user == null) {
      return done(null, false, {'No user with that email'})
    }
    try {
      if (await bcrypt.compare(password, user.password)) {
        return done (null, user)
      } else {
        return done (null, false, {message: 'Password incorrect'})
      }
    } catch (e) {
      return done(e)
    }
  }
  module.exports = initialize

  passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password', }),
  authenticateUser)
  passport.serializeUser((user,done) => { })
  passport.deserializeUser((id, done) => { })
  }
    /* function(email, password, done) {
      User.findOne({ email: email }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  )); */

//Requiring the routes

var routes = require("./app/routes/routes");
app.use('/', routes); // Had to change this to root, otherwise folks would have had to go to http://localhost:3000/booksinspace to view the page

app.listen(port, function() {
    console.log('Books in Space API is now listening on port 3000...');
});