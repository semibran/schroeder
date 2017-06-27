module.exports = function schroeder(n) {
  if (n === 0) return 1
  if (n < 0) return NaN
  var r = schroeder(n - 1)
  for (var k = 0; k <= n - 1; k++) {
    r += schroeder(k) * schroeder(n - 1 - k)
  }
  return r
}
