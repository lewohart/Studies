function Spy(target, method) {
  var result = { count: 0 };
  var previous = target[method];

  target[method] = function () {
    result.count ++;
    return previous.apply(target, arguments);
  }
  return result;
}

module.exports = Spy;
