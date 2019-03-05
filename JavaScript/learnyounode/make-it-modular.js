var fileFilter = require('./solution_filter.js');

var path = process.argv[2];
var ext = process.argv[3];

fileFilter(path, ext, function(err, files) {
    if(!err) {
      files.forEach(function(file) { console.log(file); });
    }
  });
