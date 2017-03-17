/**
 * Created by Jamie on 17/03/2017.
 */

var express = require('express');
var pug = require('pug');
var app = express();

// Set the default template engine
app.set('view engine', 'pug');

app.use('/static', express.static('public'));

function setupRoutes() {

    // Setup routes
    var index = require('./routes/index');
    var dashboard = require('./routes/dashboard');
    var map = require('./routes/map');
    var user = require('./routes/user');

    app.use(index);
    app.use(dashboard);
    app.use(map);
    app.use(user);

}

exports.app = app;
exports.setupRoutes = setupRoutes