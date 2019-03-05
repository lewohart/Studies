function reduce2(arr, func, initial) {
  if(arr.length === 0)
    return initial;
  var next = arr.shift();
  var result = func(initial, next, 0, arr);
  return reduce(arr, func, result);
}

function reduce(arr, fn, initial) {
  var recursion = function (index, value) {
    if (index > arr.length - 1)
       return value;

    var prev = fn(value, arr[index], index, arr);
    return recursion(index + 1, prev);
  };

  return recursion(0, initial);
}

module.exports = reduce
