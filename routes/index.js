/**
 * Created by Jamie on 17/03/2017.
 */

var express = require('express');
var pug = require('pug');
var router = express.Router();

router.get('/', function (req, res, next) {

    res.render('index');
    next();

});

module.exports = router;