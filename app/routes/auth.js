const express = require('express');
const router = express.Router();
const passport = require('passport');

app.get('/github', passport.authenticate('github'));

router.get('/githun/callback', passport.authenticate('github', {failureRedirect: '/login-failed'}),
function (req, res) {
    res.redirect('/models/index.js');
});

router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/logged-out');
})

module.exports = router;