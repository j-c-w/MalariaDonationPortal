/**
 * Created by Jamie on 17/03/2017.
 */

var express = require('express');
var pug = require('pug');
var router = express.Router();

router.get('/user/', function (req, res, next) {

    res.render('user');
    next();

});

module.exports = router;