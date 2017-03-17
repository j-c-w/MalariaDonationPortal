/**
 * Created by Jamie on 17/03/2017.
 */

var express = require('express');
var pug = require('pug');
var router = express.Router();

router.get('/map/', function (req, res, next) {

    res.render('map');
    next();

});

module.exports = router;