const LRUCache = require('./lru-cache')

describe('leetcode-lru-cache', () => {
    it('works for capacity of 2', () => {
        const c = new LRUCache(2);

        c.put(1, 1);
        c.put(2, 2);
        let res = c.get(1);
        expect(res).toBe(1);
        c.put(3, 3);
        res = c.get(2);
        expect(res).toBe(-1);
        c.put(4, 4);
        res = c.get(1);
        expect(res).toBe(-1);
        res = c.get(3);
        expect(res).toBe(3);
        res = c.get(4);
        expect(res).toBe(4);
    })
})
