const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/github', passport.authenticate('github'));

router.get('/github/callback', passport.authenticate('github', {failureRedirect: '/login-failed'}),
function (req, res) {
    res.redirect('./partials/content');
});

router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/logged-out');
})

module.exports= router;