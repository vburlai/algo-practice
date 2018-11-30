'use strict'

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const startsWithAtPos = (pos, word) => s.substr(pos, word.length) === word

  const rec = pos => {
    if (pos === s.length) {
      return true
    } else {
      const matches = wordDict.filter(word => startsWithAtPos(pos, word))
      return matches.findIndex(word => rec(pos + word.length)) !== -1
    }
  }

  return rec(0)
}

module.exports = wordBreak
