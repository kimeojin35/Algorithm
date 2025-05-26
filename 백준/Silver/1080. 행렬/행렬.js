const fs = require("fs");
const [num, ...testcase] = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = num.split(" ").map(Number);
let before = testcase.slice(0, n).map((i) => i.split("").map(Number));
const after = testcase.slice(n).map((i) => i.split("").map(Number));

let count = 0;

const flip = (x, y) => {
  for (let i = x; i < x + 3; i++) {
    for (let j = y; j < y + 3; j++) {
      before[i][j] = 1 - before[i][j];
    }
  }
};

if (n < 3 || m < 3) {
  console.log(before.toString() === after.toString() ? 0 : -1);
} else {
  for (let i = 0; i <= n - 3; i++) {
    for (let j = 0; j <= m - 3; j++) {
      if (before[i][j] !== after[i][j]) {
        flip(i, j);
        count++;
      }
    }
  }

  const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  console.log(equals(before, after) ? count : -1);
}