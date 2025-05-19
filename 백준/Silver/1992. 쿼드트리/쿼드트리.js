const fs = require('fs')
const [num, ...testcase] = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(num);
const arr = testcase.map((i) => i.split("").map(Number));

const quad = (x, y, size) => {
  const first = arr[x][y];
  let same = true;

  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (arr[i][j] !== first) {
        same = false;
        break;
      }
    }
    if (!same) break;
  }

  if (same) {
    return first.toString();
  }

  const half = size / 2;
  return (
    "(" +
    quad(x, y, half) + 
    quad(x, y + half, half) + 
    quad(x + half, y, half) + 
    quad(x + half, y + half, half) + 
    ")"
  );
};

console.log(quad(0, 0, n));