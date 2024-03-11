/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let max = 0;
    let i = 0;
    let j = 0;
    const set = new Set();

    while (j < s.length) {
        // grow right
        const c = s.charAt(j);
        if (!set.has(c)) {
            set.add(c);
            j++;
            max = Math.max(max, j - i);
        } else {
            // shrink left
            const c2 = s.charAt(i);
            set.delete(c2);
            i++;
        }
    }

    return max;
};

// s =  "pwwkew"
// i = 3    ^
// j = 6       ^
// max = 3
// set = (k, e, w)

module.exports = lengthOfLongestSubstring;
