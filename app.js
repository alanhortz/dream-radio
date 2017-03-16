var server = require('http').createServer();

var io = require('socket.io')(server);

io.on('connection', function(client){
  client.on('change-disk', function(data){
  	io.emit('disk-changed','Nouvelle chanson');
  });
  client.on('disconnect', function(){});
});



server.listen(3000);