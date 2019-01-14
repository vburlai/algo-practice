'use strict'

/**
 * @param {string} str
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(str, p) {
  if (!p.length) {
    return !str.length
  }

  const pp = p.split(/(?=[^*])/),
    N = str.length + 1,
    M = pp.length + 1

  let dp = Array.from({ length: M }, () =>
    Array.from({ length: N }, () => false)
  )

  dp[0][0] = true
  const validChar = (pattern, pos) =>
    pattern[0] === '.' || str[pos] === pattern[0]

  for (let j = 1; j < M; j++) {
    for (let i = 0; i < N; i++) {
      const p1 = () => i > 0 && dp[j - 1][i - 1] && validChar(pp[j - 1], i - 1)
      const p2 = () => dp[j - 1][i] && pp[j - 1][1] === '*'
      const p3 = () =>
        i > 0 && dp[j][i - 1] && pp[j - 1][1] === '*' && validChar(pp[j - 1], i - 1)
      dp[j][i] = p1() || p2() || p3()
    }
  }

  return dp[M - 1][N - 1]
}

module.exports = isMatch
