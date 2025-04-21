const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const heap = [];

const insert = (n) => {
  heap.push(n);
  let childIdx = heap.length - 1;
  let parentIdx = Math.floor((childIdx - 1) / 2);

  while (childIdx > 0 && heap[parentIdx] > heap[childIdx]) {
    [heap[parentIdx], heap[childIdx]] = [heap[childIdx], heap[parentIdx]];
    childIdx = parentIdx;
    parentIdx = Math.floor((childIdx - 1) / 2);
  }
};

const getMin = () => {
  if (heap.length === 0) return 0;

  const min = heap[0];
  heap[0] = heap[heap.length - 1];
  heap.pop();

  let parentIdx = 0;
  let left, right, smallerChild;

  while (true) {
    left = parentIdx * 2 + 1;
    right = parentIdx * 2 + 2;
    smallerChild = parentIdx;

    if (left < heap.length && heap[left] < heap[smallerChild]) {
      smallerChild = left;
    }

    if (right < heap.length && heap[right] < heap[smallerChild]) {
      smallerChild = right;
    }

    if (smallerChild === parentIdx) break;

    [heap[parentIdx], heap[smallerChild]] = [heap[smallerChild], heap[parentIdx]];
    parentIdx = smallerChild;
  }

  return min;
};

const n = input[0];
const result = [];

for (let i = 1; i <= n; i++) {
  const x = input[i];
  if (x === 0) {
    result.push(getMin());
  } else {
    insert(x);
  }
}

console.log(result.join("\n"));