/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const res = new ListNode(0, null);
    let p1 = l1;
    let p2 = l2;
    let c = 0;
    let p = res;
    while (p1 !== null || p2 !== null || c !== 0) {
        const v1 = p1 === null ? 0 : p1.val;
        const v2 = p2 === null ? 0 : p2.val;
        let sum = v1 + v2 + c;
        if (sum < 10) {
            c = 0;
        } else {
            c = 1;
            sum -= 10;
        }
        const n = new ListNode(sum, null);
        p.next = n;
        p = n;
        p1 = p1 === null ? null : p1.next;
        p2 = p2 === null ? null : p2.next;
    }
    return res.next;
};

// l1 = [2, 4, 3]
// l2 = [5, 6, 4]
// c   = 0, 1, 0
// sum = 7, 0, 8
// maxlen = 3
// res = 0, 7, 0, 8
// p              ^

module.exports = { addTwoNumbers, ListNode };
