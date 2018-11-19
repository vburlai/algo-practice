'use strict'

const values = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900
}
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let res = 0

  for (let i = 0; i < s.length; i++) {
    let two = s.substring(i, i + 2)

    if (two in values) {
      res += values[two]
      i++
    } else {
      res += values[s[i]]
    }
  }
  return res
}

module.exports = romanToInt
