'use strict'

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let res = 0

  let xx = x
  let yy = y

  while (xx !== 0 || yy !== 0) {
    if ((xx & 1) !== (yy & 1)) {
      res++
    }
    xx >>>= 1
    yy >>>= 1
  }

  return res
}

module.exports = hammingDistance
