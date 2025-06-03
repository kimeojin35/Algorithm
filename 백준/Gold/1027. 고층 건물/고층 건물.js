const fs = require('fs')
const [[n], arr] = fs.readFileSync(0).toString().trim().split("\n").map((i) => i.split(" ").map(Number));

const isBlocked = (i, j, heights) => {
  const hi = heights[i];
  const hj = heights[j];
  const m = (hj - hi) / (j - i);
  for (let k = i + 1; k < j; k++) {
    const expected = hi + m * (k - i);
    if (heights[k] >= expected) return true;
  }
  return false;
};

let count = 0;
arr.map((_, idx, origin) => {
  let c = 0;
  arr.map((_, i) => {
    if (idx !== i && !isBlocked(Math.min(idx, i), Math.max(idx, i), origin))
      c++;
  });
  count = Math.max(count, c);
});

console.log(count);