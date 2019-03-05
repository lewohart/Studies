var fs = require('fs');
var file = fs.readFile(process.argv[2], 'utf8', function(err, lines) {
    if(!err) {
      console.log(lines.split('\n').length - 1);
    }
  });
