/**
 * Created by Jamie on 17/03/2017.
 */

var express = require('express');
var pug = require('pug');
var app = express();

// Set the default template engine
app.set('view engine', 'pug');

app.use('/public', express.static('public'));

// Setup routes
var index = require('./routes/index');
app.use(index);

app.listen(3000);

module.exports = app;