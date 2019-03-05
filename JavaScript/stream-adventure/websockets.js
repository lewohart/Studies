var websocket = require('websocket-stream');
var stream = websocket("http://localhost:8000");

stream.write("hello\n");
stream.end();
