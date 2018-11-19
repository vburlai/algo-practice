'use strict'

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let productBefore = []
  let product = 1
  nums.forEach((el, ind) => {
    productBefore[ind] = product
    product *= el
  })

  let productAfter = []
  product = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    productAfter[i] = product
    product *= nums[i]
  }

  let res = []
  for (let i = 0; i < nums.length; i++) {
    res[i] = productBefore[i] * productAfter[i]
  }

  return res
}

module.exports = productExceptSelf
