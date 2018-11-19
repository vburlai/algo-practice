const romanToInt = require('./roman2int')

describe('leetcode-roman2int', () => {
  ;[
    { str: 'III', result: 3 },
    { str: 'LVIII', result: 58 },
    { str: 'MCMXCIV', result: 1994 }
  ].forEach(({ str, result }) => {
    test(`romanToInt('${str}') === ${result}`, () => {
      expect(romanToInt(str)).toEqual(result)
    })
  })
})
