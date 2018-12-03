'use strict'
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let stack = []

  let res = 0
  let i = 0
  const len = heights.length
  while (i < len) {
    if (!stack.length || heights[i] >= heights[stack[stack.length - 1]]) {
      stack.push(i++)
    } else {
      const min = stack.pop()
      const width = stack.length ? i - stack[stack.length - 1] - 1 : i
      const area = heights[min] * width
      if (area > res) {
        res = area
      }
    }
  }

  while (stack.length) {
    const min = stack.pop()
    const width = stack.length ? i - stack[stack.length - 1] - 1 : i
    const area = heights[min] * width
    if (area > res) {
      res = area
    }
  }
  return res
}
module.exports = largestRectangleArea
