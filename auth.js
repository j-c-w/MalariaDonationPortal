/**
 * Created by Jamie on 17/03/2017.
 */

var express = require('express');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

var app;

passport.use(new FacebookStrategy({
        clientID: '174325613081244',
        clientSecret: 'dec65dcd8ff5165c5e11961823bead48',
        callbackURL: "http://localhost:3000/auth/callback/",
        profileFields: ['id', 'first_name', 'last_name']
    },
    function(accessToken, refreshToken, profile, done) {
        // TODO: find or create user
        return done(null, profile);
    }
));

passport.serializeUser(function(user, done) {
    // Serialize user
    console.log('Serialize User');
    return done(null, user);
});

passport.deserializeUser(function(id, done) { // TODO: Figure out why this isn't being called
    // Deserialize user
    console.log('Deserialize User');
    return done(null, id);
});

// app is the express app
function init(express) {

    // Get the express app
    app = express;

    app.use(passport.initialize());
    app.use(passport.session());

    app.get('/auth/', passport.authenticate('facebook'));

    app.get('/auth/callback',
        passport.authenticate('facebook', { failureRedirect: '/login' }),
        function(req, res) {
            // Successful authentication, redirect home.
            console.log('Login successful');
            console.log(req.user);
            res.redirect('/');
        }
    );

}

module.exports = init;