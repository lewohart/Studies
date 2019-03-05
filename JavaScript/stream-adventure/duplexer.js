var spawn = require('child_process').spawn;
var duplexer = require('duplexer')

module.exports = function(cmd, argv) {
  var proc = spawn(cmd, argv);
  return duplexer(proc.stdin, proc.stdout);
};
