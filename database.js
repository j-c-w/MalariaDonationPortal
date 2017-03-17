var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var User = mongoose.model('User', {fname: String, lname: String, uid: Number});
var Donation = mogoose.model('Donation', {
		donationID: Number, message: String, displayName: String, 
		anonymous: Boolean, amountUSD: Number, amountLocal: String,
		nets: Number
});

var createOrGetUser = function(uid) {
	User.findById(function(
}

var u1 = new User({fname: "Jackson", lname: "Woodruff", uid: 1});
u1.save(function(error) {
	User.find(function(error, users) {
		if (error) {
			console.log('error', error);
		}
	})
});

