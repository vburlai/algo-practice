const leastInterval = require('./tasks')

describe('leetcode-tasks', () => {
  ;[
    { tasks: ['A', 'A', 'A', 'B', 'B', 'B'], n: 2, result: 8 },
    { tasks: ['A', 'A', 'A', 'B', 'B', 'B'], n: 50, result: 104 },
    {
      tasks: ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
      n: 2,
      result: 16
    }
  ].forEach(({ tasks, n, result }) => {
    test(`leastInterval('${tasks}', ${n}) === ${result}`, () => {
      expect(leastInterval(tasks, n)).toEqual(result)
    })
  })
})
