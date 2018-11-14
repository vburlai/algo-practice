'use strict'

const numbers = 'Zero,One,Two,Three,Four,Five,Six,Seven,Eight,Nine,Ten,Eleven,Twelve,Thirteen,Fourteen,Fifteen,Sixteen,Seventeen,Eighteen,Nineteen'.split(
  ','
)
const decimals = 'Zero,Ten,Twenty,Thirty,Forty,Fifty,Sixty,Seventy,Eighty,Ninety'.split(
  ','
)
function smallNumberToWords(str, outputZero = true) {
  const num = parseInt(str, 10)
  if (num === 0) {
    return outputZero ? 'Zero' : ''
  } else if (num < 20) {
    return numbers[num]
  } else if (num < 100) {
    const dec = Math.floor(num / 10)
    const rest = num % 10
    if (rest === 0) {
      return decimals[dec]
    } else {
      return decimals[dec] + ' ' + numbers[rest]
    }
  } else {
    const hundreds = Math.floor(num / 100)
    const rest = num % 100
    return (
      numbers[hundreds] +
      ' Hundred ' +
      smallNumberToWords(rest, false)
    ).trim()
  }
}

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  const str = num.toString()

  const p1 =
    str.length > 9 ? smallNumberToWords(str.substring(0, str.length - 9)) : ''
  const p2 =
    str.length > 6
      ? smallNumberToWords(str.substring(str.length - 9, str.length - 6), false)
      : ''
  const p3 =
    str.length > 3
      ? smallNumberToWords(str.substring(str.length - 6, str.length - 3), false)
      : ''

  const res = [
    p1,
    p1 ? 'Billion' : '',
    p2,
    p2 ? 'Million' : '',
    p3,
    p3 ? 'Thousand' : '',
    smallNumberToWords(str.substring(str.length - 3), !p1 && !p2 && !p3)
  ]

  return res.filter(str => !!str).join(' ')
}

module.exports = numberToWords
