'use strict'

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map(); // target - val => pos

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (map.has(n)) {
            return [map.get(n), i];
        }
        map.set(target - n, i);
    }
};

// nums = [2,7,11,15]
// target = 9
// map {
//   7 => 0
// }

module.exports = twoSum
