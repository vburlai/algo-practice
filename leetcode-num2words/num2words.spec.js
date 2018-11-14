const numberToWords = require('./num2words')

describe('leetcode-num2words', () => {
  ;[
    { num: 0, result: 'Zero' },
    { num: 1, result: 'One' },
    { num: 11, result: 'Eleven' },
    { num: 12, result: 'Twelve' },
    { num: 13, result: 'Thirteen' },
    { num: 19, result: 'Nineteen' },
    { num: 20, result: 'Twenty' },
    { num: 25, result: 'Twenty Five' },
    { num: 30, result: 'Thirty' },
    { num: 90, result: 'Ninety' },
    { num: 99, result: 'Ninety Nine' },
    { num: 300, result: 'Three Hundred' },
    { num: 301, result: 'Three Hundred One' },
    { num: 333, result: 'Three Hundred Thirty Three' },
    { num: 999, result: 'Nine Hundred Ninety Nine' },
    { num: 1000, result: 'One Thousand' },
    { num: 1001, result: 'One Thousand One' },
    { num: 1234, result: 'One Thousand Two Hundred Thirty Four' },
    {
      num: 123456,
      result: 'One Hundred Twenty Three Thousand Four Hundred Fifty Six'
    },
    {
      num: 999999,
      result: 'Nine Hundred Ninety Nine Thousand Nine Hundred Ninety Nine'
    },
    {
      num: 123456789,
      result:
        'One Hundred Twenty Three Million Four Hundred Fifty Six Thousand Seven Hundred Eighty Nine'
    },
    {
      num: 1234567891,
      result:
        'One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One'
    }
    // { num: 1234, result: '' },
  ].forEach(({ num, result }) => {
    test(`numberToWords(${num}) === ${result}`, () => {
      expect(numberToWords(num)).toEqual(result)
    })
  })
})
