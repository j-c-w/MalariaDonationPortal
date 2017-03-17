/**
 * Created by Jamie on 17/03/2017.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var donationSchema = new Schema({
        donationID: Number, message: String, displayName: String,
        anonymous: Boolean, amountUSD: Number, amountLocal: String,
        nets: Number
    }
);

module.exports = mongoose.model('Donation', donationSchema);