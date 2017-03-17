var ON_DEATH = require('death');
var neo4j = require('neo4j-driver').v1;

var driver;

// This HAS to be called when you start the server to set up the
// database.
var setup = function() {
	driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "neo4j"));

	driver.onCompleted = function() {
		// TODO -- stuff
	}

	driver.onError = function(error) {
		console.log('Driver instantiation failed', error);
	}
}

var findUserOrCreate = function(profile) {
	// Returns the user
};


// This triggers the database connection being closed
// on the application death.
ON_DEATH(function(signal, error) {
	// Close the database connection.

});

exports.findUserOrCreate = findUserOrCreate
exports.setup = setup;

