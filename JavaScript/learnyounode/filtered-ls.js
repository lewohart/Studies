var fs = require('fs');
var path = require('path');

var file = fs.readdir(process.argv[2], function(err, files) {
    if(!err)
      for(var i = 0; i < files.length; i++)
        if(path.extname(files[i]) == '.' + process.argv[3])
          console.log(files[i]);
  });
