'use strict'

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 0) {
    return -1
  }

  const rec = (start, end) => {
    if (nums[start] === target) {
      return start
    }
    if (nums[end] === target) {
      return end
    }
    const mid = (start + end) >>> 1
    if (nums[mid] === target) {
      return mid
    }
    if (end - start <= 2) {
      return -1
    }

    if (nums[start] <= nums[mid]) {
      if (target < nums[mid] && target > nums[start]) {
        return rec(start, mid)
      } else {
        return rec(mid, end)
      }
    } else {
      if (target < nums[end] && target > nums[mid]) {
        return rec(mid, end)
      } else {
        return rec(start, mid)
      }
    }
  }

  return rec(0, nums.length - 1)
}

module.exports = search
