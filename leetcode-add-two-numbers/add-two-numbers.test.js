const { addTwoNumbers, ListNode } = require('./add-two-numbers');

const aToL = (arr) => {
    const res = new ListNode(0);
    let p = res;
    for (let i = 0; i < arr.length; i++) {
        const n = new ListNode(arr[i]);
        p.next = n;
        p = n;
    }
    return res.next;
};

const lToA = (list) => {
    const res = [];
    let p = list;
    while (p !== null) {
        res.push(p.val);
        p = p.next;
    }
    return res;
};

describe('add-two-numbers', () => {
    [
        { l1: [2, 4, 3], l2: [5, 6, 4], result: [7, 0, 8] },
        { l1: [0], l2: [0], result: [0] },
        { l1: [9, 9, 9, 9, 9, 9, 9], l2: [9, 9, 9, 9], result: [8, 9, 9, 9, 0, 0, 0, 1] },
    ].map(({ l1, l2, result }) => {
        test(`addTwoNumbers(${JSON.stringify(l1)}, ${JSON.stringify(l2)}) === ${JSON.stringify(
            result
        )}`, () => {
            expect(lToA(addTwoNumbers(aToL(l1), aToL(l2)))).toEqual(result)
        })
    })
});