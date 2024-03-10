const findMedianSortedArrays = require('./median-of-two-sorted-arrays')

describe('leetcode-median-of-two-sorted-arrays', () => {
  ;[
    { nums1: [1, 3], nums2: [2], result: 2 },
    { nums1: [1, 2], nums2: [3, 4], result: 2.5 },
  ].forEach(({ nums1, nums2, result }) => {
    test(`findMedianSortedArrays(${JSON.stringify(nums1)}, ${JSON.stringify(nums2)}) === ${result
      }`, () => {
        expect(findMedianSortedArrays(nums1, nums2)).toEqual(result)
      })
  })
})
