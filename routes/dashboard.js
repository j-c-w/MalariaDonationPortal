/**
 * Created by Jamie on 17/03/2017.
 */

var express = require('express');
var pug = require('pug');
var router = express.Router();

router.get('/dashboard/', function (req, res, next) {

    console.log(req.user);
    res.render('dashboard');

    next();

});

module.exports = router;