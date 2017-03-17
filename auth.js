/**
 * Created by Jamie on 17/03/2017.
 */

var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

function init(server, db) {

    passport.use(new FacebookStrategy({
            clientID: '174325613081244',
            clientSecret: 'dec65dcd8ff5165c5e11961823bead48',
            callbackURL: "http://localhost:3000/auth/callback/",
            profileFields: ['id', 'first_name', 'last_name', 'picture.type(large)']
        },
        function(accessToken, refreshToken, profile, done) {
            db.findOrCreateUser(profile, done);
        }
    ));

    passport.serializeUser(function(user, done) {
        // Serialize user
        console.log('Serialize User');
        return done(null, user.uid);
    });

    passport.deserializeUser(function(id, done) {
        // Deserialize user
        db.findUserById(id, done);
    });

    server.use(require('morgan')('tiny'));
    server.use(require('cookie-parser')());
    server.use(require('body-parser').urlencoded({ extended: true }));
    server.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
    server.use(passport.initialize());
    server.use(passport.session());

    server.get('/auth/', passport.authenticate('facebook'));

    server.get('/auth/callback', passport.authenticate('facebook', { successRedirect: '/dashboard/', failureRedirect: '/' }));

}

module.exports = init;