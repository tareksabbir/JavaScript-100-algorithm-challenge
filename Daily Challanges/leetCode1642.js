/*
You are given an integer array heights representing the heights of buildings, some bricks, and some ladders.

You start your journey from building 0 and move to the next building by possibly using bricks or ladders.

While moving from building i to building i+1 (0-indexed),

If the current building's height is greater than or equal to the next building's height, you do not need a ladder or bricks.
If the current building's height is less than the next building's height, you can either use one ladder or (h[i+1] - h[i]) bricks.
Return the furthest building index (0-indexed) you can reach if you use the given ladders and bricks optimally.


Min heap algorithm and priority queue in data structure which is used here .

*/

/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
const furthestBuilding = (heights, bricks, ladders) => {
    const ladderAllocation = new MinHeap([], (a, b) => a < b);

    for (let i = 0; i < heights.length - 1; i += 1) {
        const curr = heights[i];
        const next = heights[i + 1];
        const diff = next - curr;

        if (diff <= 0) continue;

        ladderAllocation.enqueue(diff);
        if (ladderAllocation.getLength() > ladders) {
            const smallestLadder = ladderAllocation.dequeue();
            bricks -= smallestLadder;

            if (bricks < 0) return i;
        }
    }

    return heights.length - 1;
};

class MinHeap {
    constructor(array, comp) {
        this.comp = comp;
        this.items = this.heapify(array);
    }

    heapify(array) {
        const firstParentIdx = Math.floor((array.length - 2) / 2);

        for (let i = firstParentIdx; i >= 0; i -= 1) {
            this.siftDown(i, array.length - 1, array);
        }

        return array;
    }

    siftDown(idx, endIdx, heap) {
        let c1 = idx * 2 + 1;

        while (c1 <= endIdx) {
            const c2  = idx * 2 + 2;
            const idxToSwap = c2 <= endIdx && this.comp(heap[c2], heap[c1]) ? c2 : c1;

            if (this.comp(heap[idxToSwap], heap[idx])) {
                this.swap(idx, idxToSwap, heap);
                idx = idxToSwap;
                c1 = idx * 2 + 1;
            } else {
                return;
            }
        }
    }

    dequeue() {
        this.swap(0, this.items.length - 1, this.items);
        const ele = this.items.pop();
        this.siftDown(0, this.items.length - 1, this.items);
        return ele;
    }

    siftUp(idx, heap) {
        let parentIdx = Math.floor((idx - 1) / 2);

        while (idx > 0 && this.comp(heap[idx], heap[parentIdx])) {
            this.swap(idx, parentIdx, heap);
            idx = parentIdx;
            parentIdx = Math.floor((idx - 1) / 2);
        }
    }

    enqueue(ele) {
        this.items.push(ele);
        this.siftUp(this.items.length - 1, this.items);
    }

    swap(i, j, heap) {
        const temp = heap[i];
        heap[i] = heap[j];
        heap[j] = temp;
    }

    getLength() {
        return this.items.length;
    }
}



let result =  furthestBuilding([4,12,2,7,3,18,20,3,19],10,2)

console.log(result)

