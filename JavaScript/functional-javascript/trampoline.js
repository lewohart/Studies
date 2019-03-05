function repeat(operation, num) {
  return function() {
      if (num <= 0)
        return null;

      operation();
      return repeat(operation, --num);
    }
}

function trampoline(fn) {
  while(fn != null)
    fn = fn();
}

module.exports = function(operation, num) {
  trampoline(function() {
      return repeat(operation, num);
    });
}
