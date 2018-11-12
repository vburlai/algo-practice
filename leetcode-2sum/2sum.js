'use strict'

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if (nums.length < 2) {
    return []
  }

  var hashMap = {}
  for (var i = 0; i < nums.length; i++) {
    const secondElement = target - nums[i]
    if (secondElement in hashMap) {
      return [hashMap[secondElement], i]
    }

    hashMap[nums[i]] = i
  }

  return []
}

module.exports = twoSum
