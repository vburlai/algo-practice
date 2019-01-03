'use strict'

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let start = 0, end = 0, counts = {}, matches = 0
  let needed = {}
  if (!s.length || !t.length) {
    return ''
  }

  t.split('').forEach(c => needed[c] = (needed[c] || 0) + 1)
  const len = s.length, nlen = Object.keys(needed).length
  
  let res = '', rlen = Infinity

  while (end < len) {
    while (end < len && matches < nlen) {
      const c = s[end++]
      if (c in needed) {
        counts[c] = (counts[c] || 0) + 1
        if (counts[c] === needed[c]) {
          matches++
        }
      }
    }
    while (matches === nlen) {
      if (rlen > (end - start + 1)) {
        rlen = end - start + 1
        res = s.substring(start, end)
      }
      const c = s[start++]
      if (c in needed) {
        if (counts[c] === needed[c]) {
          matches--
        }
        counts[c] = counts[c] - 1
      }
    }
  }

  return res
}

module.exports = minWindow
