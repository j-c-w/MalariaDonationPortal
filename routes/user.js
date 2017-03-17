/**
 * Created by Jamie on 17/03/2017.
 */

var express = require('express');
var pug = require('pug');
var router = express.Router();

router.get('/user/', function (req, res) {

    res.render('user');

});

module.exports = router;