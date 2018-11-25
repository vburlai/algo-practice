const isMatch = require('./is-match')

describe('leetcode-regexp', () => {
  ;[
    { str: 'a', p: '', result: false },
    { str: '', p: '.*a*b*', result: true },
    { str: 'a', p: '.*abc*.*def', result: false },
    { str: 'abc', p: 'abc', result: true },
    { str: 'abc', p: 'a*ab9*cd*', result: true },
    { str: 'abc', p: 'ab.', result: true },
    { str: 'abcdef', p: 'ab.*f', result: true },
    { str: 'abcdcf', p: 'abc*f', result: false },
    { str: 'abcccf', p: 'abc*f', result: true },
    { str: 'aab', p: 'c*a*b', result: true }
  ].forEach(({ str, p, result }) => {
    test(`isMatch('${str}', '${p}') === ${result}`, () => {
      expect(isMatch(str, p)).toEqual(result)
    })
  })
})
