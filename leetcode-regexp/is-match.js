'use strict'

/**
 * @param {string} str
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(str, p) {
  if (p.length === 0) {
    return str.length === 0
  }

  let parts = []
  for (let i = 0; i < p.length; i++) {
    if (i + 1 < p.length && p[i + 1] === '*') {
      parts.push({ char: p[i], multi: true })
      i++
    } else {
      parts.push({ char: p[i] })
    }
  }

  const charOk = (index, partNum) =>
    parts[partNum].char === '.' || parts[partNum].char === str[index]

  const rec = (index, partNum) => {
    if (index === str.length && partNum === parts.length) {
      return true
    }
    if (partNum === parts.length) {
      return false
    }

    if (parts[partNum].multi) {
      let any = false
      let matching = true

      let result = matching && rec(index, partNum + 1)
      any = any || result

      for (let i = index + 1; matching && i <= str.length; i++) {
        matching = matching && charOk(i - 1, partNum)
        result = matching && rec(i, partNum + 1)
        any = any || result
      }
      return any
    }

    return charOk(index, partNum) && rec(index + 1, partNum + 1)
  }

  return rec(0, 0)
}

module.exports = isMatch
