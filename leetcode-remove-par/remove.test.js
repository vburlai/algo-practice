const removeInvalidParentheses = require('./remove')

describe('leetcode-remove-par', () => {
  ;[
    { str: '()())()', result: ['()()()', '(())()'] },
    { str: '(a)())()', result: ['(a)()()', '(a())()'] },
    { str: 'n', result: ['n'] }
  ].forEach(({ str, result }) => {
    test(`removeInvalidParentheses('${str}') === ${JSON.stringify(
      result
    )}`, () => {
      expect(removeInvalidParentheses(str)).toEqual(result)
    })
  })
})
