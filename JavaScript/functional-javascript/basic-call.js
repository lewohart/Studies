function duckCount() {
  var args = Array.prototype.slice.call(arguments, 0);
  return args.filter(function(x) {return Object.prototype.hasOwnProperty.call(x, 'quack'); }).length;
}

module.exports = duckCount
