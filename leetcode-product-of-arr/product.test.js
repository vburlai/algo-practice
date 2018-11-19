const productExceptSelf = require('./product')

describe('leetcode-product-of-arr', () => {
  ;[
    {
      nums: [1, 2, 3, 4],
      result: [24, 12, 8, 6]
    }
  ].forEach(({ nums, result }) => {
    test(`productExceptSelf('${JSON.stringify(nums)}') === ${JSON.stringify(
      result
    )}}`, () => {
      expect(productExceptSelf(nums)).toEqual(result)
    })
  })
})
