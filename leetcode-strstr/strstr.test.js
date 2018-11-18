const strStr = require('./strstr')

describe('leetcode-strstr', () => {
  ;[
    { haystack: '', needle: '', result: 0 },
    { haystack: 'abc', needle: '', result: 0 },
    { haystack: '', needle: 'abc', result: -1 },
    { haystack: 'abcd', needle: 'abc', result: 0 },
    { haystack: 'hello', needle: 'll', result: 2 },
    { haystack: 'aaaaa', needle: 'bba', result: -1 }
  ].forEach(({ haystack, needle, result }) => {
    test(`strStr('${haystack}', '${needle}') === ${result}`, () => {
      expect(strStr(haystack, needle)).toEqual(result)
    })
  })
})
