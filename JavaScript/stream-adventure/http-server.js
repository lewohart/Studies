var http = require('http');
var through = require('through');

var port = process.argv[2];

var stream = function(request, response) {
  if (request.method === 'POST') {
    request.pipe( through(function(buf) {
      this.queue(buf.toString().toUpperCase());
    })).pipe(response);
  }
}

var server = http.createServer(stream).listen(port);
