'use strict'

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum3(nums) {
  if (nums.length < 3) {
    return []
  }
  nums.sort((a, b) => a - b)
  // test case 313 in leetcode
  if (nums[0] === 0 && nums[nums.length - 1] === 0) {
    return [[0, 0, 0]]
  }

  let res = []
  let used = new Map()
  let lookup = new Map()
  for (let i = 0; i < nums.length; i++) {
    lookup.set(nums[i], i)
  }

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      const needed = -nums[i] - nums[j]
      if (lookup.has(needed)) {
        const k = lookup.get(needed)
        if (k > j && k > i) {
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

module.exports = threeSum3
