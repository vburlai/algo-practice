'use strict'

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum1(nums) {
  if (nums.length < 3) {
    return []
  }
  nums.sort((a, b) => a - b)
  let res = []
  let used = new Map()
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let arr = [nums[i], nums[j], nums[k]]
          const hash = arr.join(',')
          if (!used.has(hash)) {
            used.set(hash, 1)
            res.push(arr)
          }
        }
      }
    }
  }
  return res
}

module.exports = threeSum1
