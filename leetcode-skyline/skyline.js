'use strict'
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
  let result = []
  let level = 0
  let stack = []

  const queue = buildings.reduce(
    (acc, b, i) => [...acc, [b[0], i], [b[1], i]],
    []
  )
  // sort by coord ASC and height DESC (helps glue gaps of 0)
  queue.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]))

  for (let i = 0; i < queue.length; i++) {
    const coord = queue[i][0]
    const ind = queue[i][1]
    const building = buildings[ind]
    const height = building[2]

    if (coord === building[0]) {
      // start
      stack.push(ind)
      if (height > level) {
        level = height
      }
    } else {
      // end
      stack = stack.filter(el => el !== ind)
      level = stack.reduce(
        (acc, el) => (buildings[el][2] > acc ? buildings[el][2] : acc),
        0
      )
    }

    result.push([coord, level])
  }

  const gluedResults = result.reduce((acc, res) => {
    if (acc.length && acc[acc.length - 1][0] === res[0]) {
      return [...acc.slice(0, -1), res]
    }
    if (acc.length && acc[acc.length - 1][1] === res[1]) {
      return acc
    }
    return [...acc, res]
  }, [])

  return gluedResults
}
module.exports = getSkyline
