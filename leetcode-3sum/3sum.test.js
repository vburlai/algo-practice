const implementations = [
  require('./3sum-1'),
  require('./3sum-2'),
  require('./3sum-3')
]

describe('leetcode-3sum', () => {
  implementations.forEach(fn => {
    describe(`Implementation ${fn.name}`, () => {
      ;[
        { nums: [2], result: [] },
        { nums: [2, 7], result: [] },
        { nums: [-1, 0, 1, 2, -1, -4], result: [[-1, -1, 2], [-1, 0, 1]] },
        { nums: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], result: [[0, 0, 0]] }
      ].forEach(({ nums, result }) => {
        test(`threeSum(${JSON.stringify(nums)}) === ${JSON.stringify(
          result
        )}`, () => {
          expect(fn(nums)).toEqual(result)
        })
      })
    })
  })
})
