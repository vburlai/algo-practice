const lengthOfLongestSubstring = require('./longest-substring-without-repeating-characters')

describe('leetcode-longest-substring-without-repeating-characters', () => {
  ;[
    { str: 'abcabcbb', result: 3 },
    { str: 'bbbbb', result: 1 },
    { str: 'pwwkew', result: 3 },
  ].forEach(({ str, result }) => {
    test(`lengthOfLongestSubstring('${str}') === ${result}}`, () => {
      expect(lengthOfLongestSubstring(str)).toEqual(result)
    })
  })
})
