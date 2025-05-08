const input = require("fs");

const [n, ...arr] = input
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

class AbsHeap {
  constructor() {
    this.heap = [];
  }

  compare(a, b) {
    if (Math.abs(a) !== Math.abs(b)) return Math.abs(a) < Math.abs(b);
    return a < b;
  }

  insert(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  pop() {
    if (this.heap.length === 0) return 0;
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._heapifyDown();
    }
    return min;
  }

  _heapifyUp() {
    let i = this.heap.length - 1;
    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (this.compare(this.heap[i], this.heap[parent])) {
        [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
        i = parent;
      } else break;
    }
  }

  _heapifyDown() {
    let i = 0;
    const len = this.heap.length;
    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let smallest = i;

      if (left < len && this.compare(this.heap[left], this.heap[smallest]))
        smallest = left;
      if (right < len && this.compare(this.heap[right], this.heap[smallest]))
        smallest = right;

      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }
}

const heap = new AbsHeap();
let result = "";

arr.forEach((x) => {
  if (x === 0) result += heap.pop() + "\n";
  else heap.insert(x);
});

console.log(result.trim());
