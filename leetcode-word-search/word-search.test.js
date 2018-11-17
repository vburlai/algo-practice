const wordSearch = require('./word-search')

describe('leetcode-word-search', () => {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
  ]
  ;[
    { word: '', result: true },
    { word: 'X', result: false },
    { word: 'A', result: true },
    { word: 'ABCCED', result: true },
    { word: 'SEE', result: true },
    { word: 'ABCB', result: false }
  ].forEach(({ word, result }) => {
    test(`wordSearch(board, '${word}') === ${result}`, () => {
      expect(wordSearch(board, word)).toEqual(result)
    })
  })
})
