const twoSum = require('./2sum')

describe('leetcode-2sum', () => {
  ;[
    { nums: [2], target: 9, result: [] },
    { nums: [2, 7, 11, 15], target: 9, result: [0, 1] },
    { nums: [3, 2, 4], target: 6, result: [1, 2] }
  ].forEach(({ nums, target, result }) => {
    test(`twoSum(${JSON.stringify(nums)}, ${target}) === ${JSON.stringify(
      result
    )}`, () => {
      expect(twoSum(nums, target)).toEqual(result)
    })
  })
})
