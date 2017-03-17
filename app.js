/**
 * Created by Jamie on 17/03/2017.
 */

var express = require('express');

var app = express();

app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(3000);