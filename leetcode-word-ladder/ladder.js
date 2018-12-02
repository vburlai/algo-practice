'use strict'

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  const wlen = endWord.length

  const endpos = wordList.findIndex(w => w === endWord)
  if (endpos === -1) {
    return 0
  }

  const close = (w1, w2) => {
    let diff = 0
    for (let i = 0; i < wlen; i++) {
      if (w1[i] !== w2[i]) {
        if (++diff > 1) {
          break
        }
      }
    }
    return diff === 1
  }

  let pos = wordList.findIndex(w => w === beginWord)
  if (pos === -1) {
    wordList.push(beginWord)
    pos = wordList.length - 1
  }

  let visited = wordList.map(() => false)
  let pathLen = wordList.map(() => 0)
  let queue = []

  const BFS = p => {
    visited[p] = true
    pathLen[p] = 1
    queue.push(p)

    while (queue.length) {
      const p = queue.shift()
      if (p === endpos) {
        return
      }

      wordList.forEach((word, i) => {
        if (!visited[i] && close(word, wordList[p])) {
          visited[i] = true
          pathLen[i] = pathLen[p] + 1
          queue.push(i)
        }
      })
    }
  }

  BFS(pos)

  return pathLen[endpos]
}

module.exports = ladderLength
