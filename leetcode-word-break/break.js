'use strict'

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const len = s.length
  const matches = Array.from({ length: len }, () => [])

  let d = Array.from(wordDict)
  d.sort((a, b) => a.length - b.length)

  const buildMatches = () => {
    for(let i = 0; i < len; i++) {
      let subs = {}
      for(let j = 0; j < d.length; j++) {
        const dlen = d[j].length
        subs[dlen] = subs[dlen] || s.substring(i, i + dlen)
        if(subs[dlen] === d[j]) {
          matches[i].push(dlen)
        }
      }
    }
  }

  const rec = (start) => {
    if (start === len) {
      return true
    }
    if ((matches[start] || []).length === 0) {
      return false
    }
    return matches[start].some(l => rec(start + l))
  }

  buildMatches()
  return rec(0)
}

module.exports = wordBreak
