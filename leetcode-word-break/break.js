'use strict'

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const len = s.length
  let dp = Array.from({ length: len + 1 }, () => false)
  dp[0] = true

  for (let i = 1; i <= len; i++) {
    dp[i] = wordDict.some(
      word => {
        const wlen = word.length
        return dp[i - wlen] && (s.substring(i - wlen, i) === word)
      }
    )
  }

  return dp[len]
}

module.exports = wordBreak
