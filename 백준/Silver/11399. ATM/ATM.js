// 9471 피사노 주기
const fs = require('fs')
const [num, time] = fs.readFileSync(0).toString().trim().split("\n");
const arr = time.split(" ").map(Number);

let sum = 0;
let count = 0;
arr
  .sort((a, b) => a - b)
  .map((n, i) => {
    sum += n;
    count += sum;
  });
console.log(count);
