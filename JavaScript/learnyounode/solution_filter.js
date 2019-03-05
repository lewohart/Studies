var fs = require('fs');
var path = require('path');


listdir = function(dir, ext, callback) {
  fs.readdir(dir, function(err, files) {
    if(err)
      return callback(err);

    callback(err, files.filter(function(file) { return path.extname(file) === "." + ext; }));
  });
}

module.exports = listdir;
