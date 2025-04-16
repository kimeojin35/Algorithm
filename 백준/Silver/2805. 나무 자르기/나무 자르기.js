const fs = require('fs')
const [num, testcase] = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = num.split(" ").map(Number);
const arr = testcase.split(" ").map(Number);

let start = 0;
let end = Math.max(...arr);
let answer = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  const total = arr.reduce((acc, i) => acc + (i > mid ? i - mid : 0), 0);
  if (total >= m) {
    answer = mid;
    start = mid + 1;
  } else end = mid - 1;
}

console.log(answer);