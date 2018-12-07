'use strict'
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  const h = matrix.length
  const w = (matrix[0] || []).length
  if (!h || !w) {
    return 0
  }

  let result = 0
  const newResult = (height, stack, end) => {
    let len = end
    if (stack.length) {
      len = end - stack[stack.length - 1] - 1
    }
    const area = len * height
    return area > result ? area : result
  }

  for (let ground = 0; ground < h; ground++) {
    let stack = []
    let heights = []

    for (let col = 0; col < w; col++) {
      heights[col] = 0
      let i = ground
      while (i < h && matrix[i++][col] === '1') {
        heights[col]++
      }

      while (stack.length && heights[stack[stack.length - 1]] > heights[col]) {
        result = newResult(heights[stack.pop()], stack, col)
      }
      stack.push(col)
    }

    while (stack.length) {
      result = newResult(heights[stack.pop()], stack, w)
    }
  }

  return result
}

module.exports = maximalRectangle
