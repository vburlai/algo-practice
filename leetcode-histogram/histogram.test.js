const largestRectangleArea = require('./histogram')

describe('leetcode-histogram', () => {
  ;[{ nums: [2, 1, 5, 6, 2, 3], result: 10 }].forEach(({ nums, result }) => {
    test(`largestRectangleArea(${JSON.stringify(nums)}) === ${result}`, () => {
      expect(largestRectangleArea(nums)).toEqual(result)
    })
  })
})
