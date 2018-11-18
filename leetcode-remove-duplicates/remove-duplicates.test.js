const removeDuplicates = require('./remove-duplicates')

describe('leetcode-remove-duplicates', () => {
  ;[
    { nums: [], result: 0, resultArray: [] },
    { nums: [1], result: 1, resultArray: [1] },
    { nums: [1, 2], result: 2, resultArray: [1, 2] },
    { nums: [1, 1, 1], result: 1, resultArray: [1] },
    {
      nums: [1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3],
      result: 3,
      resultArray: [1, 2, 3]
    }
  ].forEach(({ nums, result, resultArray }) => {
    test(`removeDuplicates(${JSON.stringify(
      nums
    )}) === ${result} and nums starts with ${JSON.stringify(
      resultArray
    )}`, () => {
      expect(removeDuplicates(nums)).toEqual(result)
      expect(nums.slice(0, result)).toEqual(resultArray)
    })
  })
})
