var http = require('http');
var through2Map = require('through2-map')

var port = +process.argv[2];
var server = http.createServer(handler).listen(port, '127.0.0.1');

var handler = function(request, response) {
  if (request.method == 'POST') {
    var stream = request.pipe(through2Map(function (chunk) {
        return chunk.toString().toUpperCase();
      }));

    stream.pipe(response);
  }
}
