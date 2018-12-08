'use strict'
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
  let result = new Map()
  let level = 0
  let set = new Set()

  const queue = []
  buildings.forEach((b, i) => queue.push([b[0], i], [b[1], i]))
  // sort by coord ASC and height DESC (helps glue gaps of 0)
  queue.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]))

  for (let i = 0; i < queue.length; i++) {
    const coord = queue[i][0]
    const ind = queue[i][1]
    const building = buildings[ind]
    const height = building[2]

    if (coord === building[0]) {
      // start
      set.add(ind)
      if (height > level) {
        level = height
      }
    } else {
      // end
      set.delete(ind)
      level = 0
      for (let el of set.values()) {
        const h = buildings[el][2]
        if (h > level) {
          level = h
        }
      }
    }

    result.set(coord, level)
  }

  const gluedResults = []
  let prevRes
  for (let i of result.keys()) {
    const res = result.get(i)
    let add = true
    if (i > 0) {
      if (prevRes === res) {
        add = false
      }
    }

    prevRes = res
    if (add) {
      gluedResults.push([i, res])
    }
  }

  return gluedResults
}
module.exports = getSkyline
