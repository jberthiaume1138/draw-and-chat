var express = require('express');
var socket_io = require('socket.io');
var http = require('http');
var util = require('util');

var app = express();

var server = http.Server(app);
var io = socket_io(server);

app.use('*', function(req, res) {
    res.send('Error 404 - page not found');
    res.status(404);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    util.log('.....Listening on port: ' + port + ' .....');
});
