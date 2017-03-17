
var mongoose = require('mongoose');
var User = require('./models/User');


mongoose.connect('mongodb://localhost/test');



/*var User = mongoose.model('User', {fname: String, lname: String, uid: Number});
var Donation = mogoose.model('Donation', {
		donationID: Number, message: String, displayName: String, 
		anonymous: Boolean, amountUSD: Number, amountLocal: String,
		nets: Number
});*/

function createUser(fname, lname, id, cb) {

	console.log('Create User');

	var user = new User({fname: fname, lname: lname, uid: id});
	user.save(function (err) {

		cb(err, user);

	});
}

function findUserById(id, cb){

	console.log('Find User');

	User.findOne({uid: id}, function (err, user) {

		cb(err, user);

	});

}

function findOrCreateUser(profile, cb) {

	console.log('Find/Create User');

	findUserById(profile.id, function (err, user) {

		if(user === null){
			// Create a new user
			console.log(profile);
			createUser(profile.name.givenName, profile.name.familyName, profile.id, function (err, user) {

				cb(err, user);

			});
		}
		else{

			cb(err, user);

		}


	});

}

exports.findOrCreateUser = findOrCreateUser;
exports.findUserById = findUserById;
exports.createUser = createUser;


