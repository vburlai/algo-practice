const numIslands = require('./num-islands')

describe('leetcode-num-islands', () => {
  ;[
    { grid: ['11', '00', '01'], result: 2 },
    { grid: ['11110', '11010', '11000', '00000'], result: 1 },
    { grid: ['11000', '11000', '00100', '00011'], result: 3 },
    { grid: ['111', '010', '111'], result: 1 }
  ].forEach(({ grid, result }) => {
    test(`numIslands(${JSON.stringify(grid)}) === ${result}`, () => {
      expect(numIslands(grid)).toEqual(result)
    })
  })
})
