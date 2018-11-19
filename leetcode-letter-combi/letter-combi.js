'use strict'

const keyboard = ' ,,abc,def,ghi,jkl,mno,pqrs,tuv,wxyz'
  .split(',')
  .map(str => str.split(''))

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let res = []

  const rec = (start, pos) => {
    if (pos === digits.length) {
      res.push(start)
    } else {
      keyboard[digits[pos]].forEach(l => {
        rec(`${start}${l}`, pos + 1)
      })
    }
  }

  if (digits.length) {
    rec('', 0)
  }

  return res
}

module.exports = letterCombinations
