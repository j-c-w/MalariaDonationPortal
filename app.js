/**
 * Created by Jamie on 17/03/2017.
 */

var server = require('./server');
var app = server.app;
var auth = require('./auth');
var database = require('./database');

// Setup authentication
auth(app, database);

// Setup routing
server.setupRoutes();

// Start server
console.log('Server Started listening on port 3000');
app.listen(3000);
