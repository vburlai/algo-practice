'use strict'

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (!s.length || !t.length) {
    return ''
  }

  const req = t.split('').reduce((acc, c) => {
    acc[c] = (acc[c] || 0) + 1
    return acc
  }, {})

  const reqKeysLength = Object.keys(req).length

  const ind = s
    .split('')
    .reduce((acc, c, i) => (c in req ? acc.concat([i]) : acc), [])

  if (!ind.length) {
    return ''
  }

  const count = (i, j) => {
    let res = {}
    for (let k = i; k <= j; k++) {
      const c = s[ind[k]]
      res[c] = (res[c] || 0) + 1
    }
    return res
  }

  const satisfiesChar = (c, counts) => counts[c] >= req[c]
  const satisfiesReq = counts =>
    Object.keys(req).filter(c => satisfiesChar(c, counts)).length

  let start
  let end
  let found = false

  for (let len = t.length; len <= ind.length; len++) {
    let counts
    let satisfied
    for (let i = 0; i <= ind.length - len; i++) {
      if (i === 0) {
        counts = count(i, i + len - 1)
        satisfied = satisfiesReq(counts)
      } else {
        const cRem = s[ind[i - 1]]
        counts[cRem]--
        if (counts[cRem] === req[cRem] - 1) {
          satisfied--
        }

        const cAdd = s[ind[i + len - 1]]
        counts[cAdd] = (counts[cAdd] || 0) + 1
        if (counts[cAdd] === req[cAdd]) {
          satisfied++
        }
      }

      if (satisfied === reqKeysLength) {
        if (!found || ind[i + len - 1] - ind[i] <= end - start) {
          start = ind[i]
          end = ind[i + len - 1]
          found = true
        }
      }
    }
  }

  return found ? s.substring(start, end + 1) : ''
}

module.exports = minWindow
