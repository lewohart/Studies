var http = require('http');
var url = require('url');

var responsePost = function(response, json) {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(json));
  response.end();
}

var parsePost = function(url, response) {
  if(url.pathname === "/api/parsetime") {
    var date = new Date(url.query.iso);
    responsePost(response, { hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()});
  }
  else if(url.pathname === "/api/unixtime") {
    responsePost(response, {unixtime: new Date(url.query.iso).valueOf()});
  }
}

var handler = function(request, response) {
  parsePost(url.parse(request.url, true), response);
}

var port = +process.argv[2];
var server = http.createServer(handler).listen(port, '127.0.0.1');
