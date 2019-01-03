const wordBreak = require('./break')

describe('leetcode-word-break', () => {
  ;[
    { s: 'leetcode', dict: ['leet', 'code'], result: true },
    { s: 'applepenapple', dict: ['apple', 'pen'], result: true },
    {
      s: 'catsandog',
      dict: ['cats', 'dog', 'sand', 'and', 'cat'],
      result: false
    },
    {
      s: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
      dict: ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaaa'],
      result: false
    }
  ].forEach(({ s, dict, result }) => {
    test(`wordBreak('${s}', ${JSON.stringify(dict)}) === ${result}`, () => {
      expect(wordBreak(s, dict)).toEqual(result)
    })
  })
})
