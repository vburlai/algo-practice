const hammingDistance = require('./ham-dist')

describe('leetcode-ham-dist', () => {
  ;[
    { x: 1, y: 4, result: 2 },
    { x: 1577962638, y: 1727613287, result: 16 }
  ].forEach(({ x, y, result }) => {
    test(`hammingDistance(${x}, ${y}) === ${result}}`, () => {
      expect(hammingDistance(x, y)).toEqual(result)
    })
  })
})
