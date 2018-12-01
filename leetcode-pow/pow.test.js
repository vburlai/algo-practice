const myPow = require('./pow')

describe('leetcode-pow', () => {
  ;[
    { x: 2, n: 10, result: 1024 },
    { x: 2.1, n: 3, result: 9.261000000000001 },
    { x: 2, n: -2, result: 0.25 }
  ].forEach(({ x, n, result }) => {
    test(`myPow(${x}, ${n}) === ${result}}`, () => {
      expect(myPow(x, n)).toEqual(result)
    })
  })
})
