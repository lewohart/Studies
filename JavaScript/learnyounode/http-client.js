var http = require('http');
var url = process.argv[2];

var stream = function(response) {
    response.setEncoding("utf8");
    response.on("data", console.log);
    response.on("data", console.error);
  };

http.get(url, stream);
