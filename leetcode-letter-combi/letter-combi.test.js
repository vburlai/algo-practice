const letterCombinations = require('./letter-combi')

describe('leetcode-letter-combi', () => {
  ;[
    {
      digits: '23',
      result: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
    }
  ].forEach(({ digits, result }) => {
    test(`letterCombinations('${digits}') === ${JSON.stringify(
      result
    )}}`, () => {
      expect(letterCombinations(digits)).toEqual(result)
    })
  })
})
