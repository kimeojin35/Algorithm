const fs = require('fs')
const [n1, r, c] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
const n = Math.pow(2, n1);
let count = 0;
const visited = (num, row, col) => {
  if (num === 1) return;
  const half = num / 2;
  if (r < row + half && c < col + half) visited(half, row, col);
  else if (r < row + half && c >= col + half) {
    count += half * half;
    visited(half, row, col + half);
  } else if (r >= row + half && c < col + half) {
    count += 2 * half * half;
    visited(half, row + half, col);
  } else {
    count += 3 * half * half;
    visited(half, row + half, col + half);
  }
};
visited(n, 0, 0);
console.log(count);