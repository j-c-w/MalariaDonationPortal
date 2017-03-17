var neo4j = require('neo4j');

var db;

// This HAS to be called when you start the server to set up the
// database.
var setup = function() {
	db = new neo4j.GraphDatabase('bolt://neo4j:novmember@localhost:7474');
	console.log('setup called');

	db.onCompleted = function() {
		console.log('connection created');
	}

	db.onError = function(error) {
		console.log('Driver instantiation failed', error);
	}

	console.log(db);
}

var findUserOrCreate = function(profile) {
	// Returns the user
};

exports.findUserOrCreate = findUserOrCreate
exports.setup = setup;

