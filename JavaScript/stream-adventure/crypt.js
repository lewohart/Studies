var crypto = require('crypto');

var passphrase = process.argv[2];
var stream = crypto.createDecipher('AES256', passphrase);

process.stdin.pipe(stream).pipe(process.stdout);
