const maximalRectangle = require('./rect')

describe('leetcode-max-rect', () => {
  ;[
    {
      matrix: [
        ['1', '0', '1', '0', '0'],
        ['1', '0', '1', '1', '1'],
        ['1', '1', '1', '1', '1'],
        ['1', '0', '0', '1', '0']
      ],
      result: 6
    },
    {
      matrix: [['1']],
      result: 1
    },
    {
      matrix: [
        ['1', '1', '1', '1', '1', '1', '1', '1'],
        ['1', '1', '1', '1', '1', '1', '1', '0'],
        ['1', '1', '1', '1', '1', '1', '1', '0'],
        ['1', '1', '1', '1', '1', '0', '0', '0'],
        ['0', '1', '1', '1', '1', '0', '0', '0']
      ],
      result: 21
    }
  ].forEach(({ matrix, result }) => {
    test(`maximalRectangle(${JSON.stringify(matrix)}) === ${JSON.stringify(
      result
    )}`, () => {
      expect(maximalRectangle(matrix)).toEqual(result)
    })
  })
})
