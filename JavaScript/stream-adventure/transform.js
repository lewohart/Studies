var through = require('through');

var upperCaser = through(function(buf) {
  this.queue(buf.toString().toUpperCase());
});

process.stdin.pipe(upperCaser).pipe(process.stdout);
