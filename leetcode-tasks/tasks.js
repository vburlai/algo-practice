'use strict'

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  let amount = tasks.reduce(
    (acc, l) => ({
      ...acc,
      [l]: (acc[l] || 0) + 1
    }),
    {}
  )
  let jobs = Object.keys(amount)
  jobs.sort((a, b) => amount[b] - amount[a])
  let available = jobs.reduce((acc, l) => ({ ...acc, [l]: 0 }), {})

  let ticks = 0
  let done = 0
  let idle
  while (done < tasks.length) {
    let nextJob = jobs.find(job => amount[job] > 0 && available[job] <= ticks)

    if (!nextJob) {
      // next available
      nextJob = jobs
        .filter(job => amount[job] > 0)
        .reduce((acc, job) => (available[job] < available[acc] ? job : acc))
      //fast forward time
      ticks = available[nextJob]
    }

    ticks++
    done++
    amount[nextJob]--
    available[nextJob] = ticks + n

    // not optimal :(
    jobs.sort((a, b) => amount[b] - amount[a])
  }

  return ticks
}

module.exports = leastInterval
