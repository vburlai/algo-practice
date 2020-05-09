// cap: 2
// keys: 1, 2
// values: 1 => 1, 2 => 2
//
// map: 1 => 1 , 2 => 2
// size: 2
// keysStart/keyEnd list of keys with start/end
//        null -> (1)   -> (2) -> null 
// keysMap: 1 =>   ^, 2 =>  ^

class List {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class LRUCache {
    constructor(cap) {
        this.cap = cap;
        this.size = 0;
        this.map = new Map();
        this.keysMap = new Map();

        this.keysStart = new List(null);
        this.keysEnd = new List(null);
        this.keysStart.next = this.keysEnd;
        this.keysEnd.prev = this.keysStart;
    }

    get(k) { // O(1)
        const l = this.keysMap.get(k);
        if (!l) {
            return -1;
        }
        this._touch(k);

        return this.map.get(k);
    }

    _touch(k) { // O(1)
        const l = this.keysMap.get(k);
        if (l.next) {
            l.next.prev = l.prev;
        }
        if (l.prev) {
            l.prev.next = l.next;
        }

        this.size--;
        this._prepend(k);
    }

    _capCheck() { // O(1)
        if (this.size === this.cap) {
            const oldkey = this.keysEnd.prev;
            console.log(`evicting ${oldkey.val}`);
            this.keysEnd.prev = oldkey.prev;
            if (oldkey.prev) {
                oldkey.prev.next = oldkey.next;
            }
            this.size--;
            this.map.delete(oldkey.val);
            this.keysMap.delete(oldkey.val);
        }
    }

    _prepend(k) { // O(1)
        const tmp = this.keysStart.next;
        if (tmp.val !== k) {
            const l = new List(k);
            l.prev = this.keysStart;
            this.keysStart.next = l;
            l.next = tmp;
            tmp.prev = l;
            this.size++;
            this.keysMap.set(k, l);
        }
    }

    put(k, v) { // O(1)
        if (!this.keysMap.has(k)) {
            this._capCheck();

            this._prepend(k);
        }

        this.map.set(k, v);

        this._touch(k);
    }
}

module.exports = LRUCache;
