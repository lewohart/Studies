var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket){
  socket.write(strftime("%F %R\n", new Date()));
  socket.end();
});

var port = +process.argv[2];
console.log(strftime("%F %R\n", new Date()));
server.listen(port);
