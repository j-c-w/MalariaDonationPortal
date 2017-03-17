/**
 * Created by Jamie on 17/03/2017.
 */

var express = require('express');
var pug = require('pug');
var router = express.Router();

router.get('/dashboard/', function (req, res, next) {

    console.log(req.user);
    res.render('dashboard', {user: req.user, amountDonated: 10000});

    next();

});

module.exports = router;