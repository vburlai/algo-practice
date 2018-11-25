const search = require('./rotated-search')

describe('leetcode-rotated-search', () => {
  ;[
    { nums: [], target: 0, result: -1 },
    { nums: [4, 5, 6, 7, 0, 1, 2], target: 0, result: 4 },
    { nums: [4, 5, 6, 7, 0, 1, 2], target: 3, result: -1 }
  ].forEach(({ nums, target, result }) => {
    test(`search(${JSON.stringify(nums)}, ${target}) === ${result}`, () => {
      expect(search(nums, target)).toEqual(result)
    })
  })
})
