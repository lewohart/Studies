var http = require('http');
var concat = require('concat-stream');
var urls = process.argv.slice(2);

var count = 0;
var buffer = new Array(urls.length);

var finish = function() {
  if(++count === buffer.length)
    buffer.forEach(function(content){ console.log(content) });
}

var httpGet = function(i) {
  http.get(urls[i], function(response) {
    response.setEncoding("utf8");
    response.pipe(concat(function(stream) { buffer[i] = stream; finish(); }));
  });
}

for(var i = 0; i < urls.length; i++) {
  httpGet(i);
}
