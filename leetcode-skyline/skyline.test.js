const getSkyline = require('./skyline')

describe('leetcode-skyline', () => {
  ;[
    {
      buildings: [
        [2, 9, 10],
        [3, 7, 15],
        [5, 12, 12],
        [15, 20, 10],
        [19, 24, 8]
      ],
      result: [[2, 10], [3, 15], [7, 12], [12, 0], [15, 10], [20, 8], [24, 0]]
    },
    {
      buildings: [[0, 2, 3], [2, 5, 3]],
      result: [[0, 3], [5, 0]]
    },
    {
      buildings: [[2, 13, 10], [10, 17, 25], [12, 20, 14]],
      result: [[2, 10], [10, 25], [17, 14], [20, 0]]
    },
    {
      buildings: [[2, 9, 10], [9, 12, 15]],
      result: [[2, 10], [9, 15], [12, 0]]
    }
  ].forEach(({ buildings, result }) => {
    test(`getSkyline(${JSON.stringify(buildings)}) === ${JSON.stringify(
      result
    )}`, () => {
      expect(getSkyline(buildings)).toEqual(result)
    })
  })
})
