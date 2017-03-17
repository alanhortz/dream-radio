var express = require('express');
var app = require('express')();
var server = require('http').createServer(app);

var port = process.env.PORT || 3000;

app.use(express.static('public'));

var io = require('socket.io')(server);

io.on('connection', function(client){
  client.on('change-disk', function(data){
  	io.emit('disk-changed','Nouvelle chanson');
  });
  client.on('disconnect', function(){});
});


server.listen(port);