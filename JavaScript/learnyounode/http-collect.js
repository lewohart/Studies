var http = require('http');
var concatStream = require('concat-stream');
var url = process.argv[2];

var writer = concatStream(function(data) {
  console.log(data.length);
  console.log(data)
});

var stream = function(response) {
  response.setEncoding("utf8");
  response.on("data", function(data) { writer.write(data); });
  response.on("end", function(data) { writer.end(); });
};

http.get(url, stream);
