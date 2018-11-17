'use strict'

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum2(nums) {
  if (nums.length < 3) {
    return []
  }
  nums.sort((a, b) => a - b)
  let res = []
  let used = new Map()
  let map = new Map() // sum => [ [ind1, ind2], ... ]
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j]
      const ind = [i, j]
      if (map.has(sum)) {
        map.get(sum).push(ind)
      } else {
        map.set(sum, [ind])
      }
    }
  }
  for (let i = 0; i < nums.length; i++) {
    const needed = -nums[i]
    if (map.has(needed)) {
      for (let ind of map.get(needed)) {
        if (i < ind[0] && i < ind[1]) {
          let arr = [nums[i], nums[ind[0]], nums[ind[1]]]
          const hash = arr.join(',')
          if (!used.has(hash)) {
            res.push(arr)
            used.set(hash, 1)
          }
        }
      }
    }
  }
  return res
}

module.exports = threeSum2
