'use strict'

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const len = needle.length
  if (len === 0) {
    return 0
  }
  if (haystack.length < len) {
    return -1
  }

  if (haystack.substring(0, len) === needle) {
    return 0
  }

  let start = 0
  let end = len

  const calcHash = (acc, el) => acc + el.charCodeAt(0)

  let hash = haystack
    .substring(start, end)
    .split('')
    .reduce(calcHash, 0)
  let needed = needle.split('').reduce(calcHash, 0)

  while (end <= haystack.length) {
    hash = hash - haystack.charCodeAt(start++) + haystack.charCodeAt(end++)

    if (hash === needed) {
      if (haystack.substring(start, end) === needle) {
        return start
      }
    }
  }

  return -1
}

module.exports = strStr
