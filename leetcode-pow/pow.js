'use strict'

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (x === 0) {
    return 0
  }
  if (x === 1) {
    return 1
  }
  if (n === 0) {
    return 1
  }

  const negative = n < 0
  const power = Math.abs(n)

  let powx2n = [x] // x^(2^i) - x^1, x^2, x^4, ...
  let limit = Math.log(power) / Math.log(2) - 1
  for (let k = 1; k < limit; k++) {
    powx2n[k] = powx2n[k - 1] * powx2n[k - 1]
  }

  let res = 1
  let remaining = Math.abs(n)
  for (let k = powx2n.length - 1; k >= 0 && remaining; k--) {
    const pow = 1 << k
    while (remaining >= pow) {
      res *= powx2n[k]
      remaining -= pow
    }
  }

  return negative ? 1 / res : res
}

module.exports = myPow
