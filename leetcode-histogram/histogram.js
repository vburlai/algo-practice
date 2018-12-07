'use strict'
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let stack = []

  let result = 0
  const newResult = (height, stack, end) => {
    let len = end
    if (stack.length) {
      len = end - stack[stack.length - 1] - 1
    }
    const area = len * height
    return area > result ? area : result
  }

  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      result = newResult(heights[stack.pop()], stack, i)
    }
    stack.push(i)
  }

  while (stack.length) {
    result = newResult(heights[stack.pop()], stack, heights.length)
  }

  return result
}
module.exports = largestRectangleArea
