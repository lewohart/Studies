var split = require('split');
var through = require('through');

var line = 1;

var write = function(data) {
  var isEven = (line++ % 2 == 0);
  this.queue(isEven?
      data.toString().toUpperCase() + '\n':
      data.toString().toLowerCase() + '\n');
}

var lines = process.stdin.pipe(split('\n'));
var transformed = lines.pipe(through(write));
transformed.pipe(process.stdout);
