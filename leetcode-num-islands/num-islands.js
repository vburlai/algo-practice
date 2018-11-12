'use strict'

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const h = grid.length
  if (h === 0) return 0
  const w = grid[0].length
  const ind = (x, y) => x + w * y
  const firstLand = (x, y) => {
    for (let i = x; i < w; i++) {
      for (let j = i == x ? y : 0; j < h; j++) {
        if (grid[j][i] === '1')
          if (!result[ind(i, j)]) {
            return { x: i, y: j, found: true }
          }
      }
    }
    return { found: false }
  }

  const occupy = (x, y, num) => {
    result[ind(x, y)] = num

    if (x + 1 < w && grid[y][x + 1] === '1' && !result[ind(x + 1, y)])
      occupy(x + 1, y, num)
    if (y + 1 < h && grid[y + 1][x] === '1' && !result[ind(x, y + 1)])
      occupy(x, y + 1, num)
    if (x - 1 >= 0 && grid[y][x - 1] === '1' && !result[ind(x - 1, y)])
      occupy(x - 1, y, num)
    if (y - 1 >= 0 && grid[y - 1][x] === '1' && !result[ind(x, y - 1)])
      occupy(x, y - 1, num)
  }

  let count = 0
  let result = new Array(w * h)

  let land = { x: 0, y: 0, found: false }
  land = firstLand(land.x, land.y)
  while (land.found) {
    occupy(land.x, land.y, ++count)
    land = firstLand(land.x, land.y)
  }

  return count
}

module.exports = numIslands
