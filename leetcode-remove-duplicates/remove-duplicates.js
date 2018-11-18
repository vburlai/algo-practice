'use strict'

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length < 2) {
    return nums.length
  }

  let res = 0
  let current = 1
  while (current < nums.length) {
    if (nums[res] !== nums[current]) {
      nums[++res] = nums[current]
    }
    current++
  }

  return res + 1
}

module.exports = removeDuplicates
