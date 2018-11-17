/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var wordSearch = function(board, word) {
  if (!word.length) return true

  const h = board.length
  if (!h) return false
  const w = board[0].length

  let letters = {}
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      const letter = board[j][i]
      letters[letter] = (letters[letter] || []).concat([[j, i]])
    }
  }

  if (word.length === 1) {
    return !!letters[word[0]]
  }

  const isConnected = pos1 => pos2 =>
    (Math.abs(pos1[0] - pos2[0]) === 0 && Math.abs(pos1[1] - pos2[1]) === 1) ||
    (Math.abs(pos1[0] - pos2[0]) === 1 && Math.abs(pos1[1] - pos2[1]) === 0)

  const isNotUsed = used => pos => !used[pos.join(',')]

  const check = (currentPos, cur, used) => {
    if (cur === word.length) return true

    const optionsNew = (letters[word[cur]] || [])
      .filter(isNotUsed(used))
      .filter(isConnected(currentPos))

    return optionsNew.some(pos2 =>
      check(pos2, cur + 1, { ...used, [pos2.join(',')]: 1 })
    )
  }

  return (letters[word[0]] || []).some(pos =>
    check(pos, 1, { [pos.join(',')]: 1 })
  )
}

module.exports = wordSearch
