/**
 * Created by Jamie on 17/03/2017.
 */

var express = require('express');
var pug = require('pug');
var app = express();

// Set the default template engine
app.set('view engine', 'pug');

app.use('/public', express.static('public'));
app.use(require('morgan')('tiny'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// Setup routes
var index = require('./routes/index');
app.use(index);

module.exports = app;