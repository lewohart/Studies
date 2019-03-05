var http = require('http');
var fs = require('fs');

var fileName = process.argv[3];
var port = +process.argv[2];
var server = http.createServer(handler).listen(port, '127.0.0.1');

var handler = function (request, response) {
  var file = fs.createReadStream(fileName);
  response.writeHead(200, {"Content-Type": "text/html"});
  file.pipe(response);
}
