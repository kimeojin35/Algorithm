const fs = require("fs");
const [n, ...arr] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let heap = [];

const insert_heap = (item) => {
  heap.push(item);
  let i = heap.length - 1;
  while (i > 0) {
    const parent = Math.floor((i - 1) / 2);
    if (heap[parent] < heap[i]) {
      [heap[parent], heap[i]] = [heap[i], heap[parent]];
      i = parent;
    } else break;
  }
};

const delete_heap = () => {
  if (heap.length === 0) return 0;

  const item = heap[0];
  heap[0] = heap[heap.length - 1];
  heap.pop();

  let i = 0;
  while (true) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;
    if (left < heap.length && heap[left] > heap[largest]) largest = left;
    if (right < heap.length && heap[right] > heap[largest]) largest = right;
    if (largest === i) break;
    [heap[i], heap[largest]] = [heap[largest], heap[i]];
    i = largest;
  }

  return item;
};

let answer = [];
arr.map((i) => {
  if (i === 0) answer.push(delete_heap(i));
  else insert_heap(i);
});

console.log(answer.join("\n"));