const fs = require('fs')
const [num, ...testcase] = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(num);
const arr = testcase.map((i) => i.split(" ").map(Number));

let white = 0;
let blue = 0;

const color = () => {};

const split = (x, y, size) => {
  let first = arr[y][x];
  let same = true;
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (first !== arr[j][i]) {
        same = false;
        break;
      }
    }
  }

  if (same) {
    if (first == 1) blue++;
    else white++;
    return;
  }

  const half = size / 2;
  split(x + half, y, half);
  split(x, y, half);
  split(x, y + half, half);
  split(x + half, y + half, half);
};

split(0, 0, n);
console.log(`${white}\n${blue}`);