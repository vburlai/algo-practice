/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let p1 = 0;
    let p2 = 0;

    const len = nums1.length + nums2.length;
    const skip = len >>> 1;
    const even = len & 1;

    const next = () => {
        if (p1 === nums1.length) {
            return nums2[p2++];
        }
        if (p2 === nums2.length) {
            return nums1[p1++];
        }
        if (nums1[p1] < nums2[p2]) {
            return nums1[p1++];
        }
        return nums2[p2++];
    }

    let n1;
    for (let i = 0; i < skip + even; i++) {
        n1 = next();
    }
    if (even) {
        return n1;
    }
    return (n1 + next()) / 2;
};

// n1 =  [1,2]
// p1 = 2     ^
// n2 =  [3,4]
// p2 = 0 ^
// skip = 2
// even = false
// i =      0  1
// next() = 1, 2

module.exports = findMedianSortedArrays;
