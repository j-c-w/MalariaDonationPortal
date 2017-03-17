/**
 * Created by Jamie on 17/03/2017.
 */

var server = require('./server');
var auth = require('./auth');
var database = require('./database');

// Setup authentication
auth(server);
// Setup the databse
database.setup();

// Start server
console.log('Server Started listening on port 3000');
server.listen(3000);
