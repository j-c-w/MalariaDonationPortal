/**
 * Created by Jamie on 17/03/2017.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    fname: String,
    lname: String,
    uid: Number,
    image: String
}
);

module.exports = mongoose.model('User', userSchema);