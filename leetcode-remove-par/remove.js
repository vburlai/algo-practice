'use strict'
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  if (!s.length) {
    return ['']
  }
  let res = []
  let maxlen = 0
  const last = s.length - 1
  let set = new Set()

  const dp = (pref, pos, bal) => {
    const c = s[pos]
    if (pos === last) {
      switch (bal) {
        case 0:
          if (c !== ')' && c !== '(') {
            if (!set.has(pref + c)) {
              res.push(pref + c)
              maxlen = Math.max(maxlen, pref.length + 1)
              set.add(pref + c)
            }
          } else {
            if (!set.has(pref)) {
              res.push(pref)
              maxlen = Math.max(maxlen, pref.length)
              set.add(pref)
            }
          }
          break

        case 1:
          if (c === ')') {
            if (!set.has(pref + c)) {
              res.push(pref + c)
              maxlen = Math.max(maxlen, pref.length + 1)
              set.add(pref + c)
            }
          }
          break
      }
    } else {
      switch (c) {
        case '(':
          dp(pref + c, pos + 1, bal + 1)
          dp(pref, pos + 1, bal)
          break

        case ')':
          if (bal > 0) {
            dp(pref + c, pos + 1, bal - 1)
          }
          dp(pref, pos + 1, bal)
          break

        default:
          dp(pref + c, pos + 1, bal)
      }
    }
  }

  dp('', 0, 0)

  return res.filter(str => str.length === maxlen)
}

module.exports = removeInvalidParentheses
