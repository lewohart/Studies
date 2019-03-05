module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(p, c, i, arr) {
    return p.concat(fn(c, i, arr));
  }, []);
}
