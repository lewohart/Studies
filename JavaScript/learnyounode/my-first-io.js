var fs = require('fs');
var file = fs.readFileSync(process.argv[2]);
var lines = file.toString();
var count = lines.split('\n');
console.log(count.length - 1);
