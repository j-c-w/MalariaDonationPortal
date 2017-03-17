/**
 * Created by Jamie on 17/03/2017.
 */

var express = require('express');
var pug = require('pug');
var app = express();

// Set the default template engine
app.set('view engine', 'pug');

app.use('/static', express.static('public'));
app.use(require('morgan')('tiny'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// Setup routes
var index = require('./routes/index');
var dashboard = require('./routes/dashboard');
var map = require('./routes/map');
var user = require('./routes/user');

app.use(index);
app.use(dashboard);
app.use(map);
app.use(user);

module.exports = app;