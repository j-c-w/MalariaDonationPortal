/**
 * Created by Jamie on 17/03/2017.
 */

var server = require('./server');
var auth = require('./auth');

// Setup authentication
auth(server);
// Setup the databse

// Start server
server.listen(3000);
