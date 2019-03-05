var through = require('through');
var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');

var ciper = process.argv[2];
var passphrase = process.argv[3];
var decipher = crypto.createDecipher(ciper, passphrase);
var gunzip = zlib.createGunzip();
var untar = tar.Parse();

untar.on('entry', function (entry) {
  if(entry.type === 'File') {
    entry
      .pipe(crypto.createHash('md5', { encoding: 'hex' }))
      .pipe(through(function(buffer) {
          this.queue(buffer + ' ' + entry.path + '\n');
        }))
      .pipe(process.stdout);
  }
});

process.stdin.pipe(decipher).pipe(gunzip).pipe(untar);
