const fs = require('fs')
const [num, testcase] = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(num);
const arr = testcase.split(" ").map(Number);

let max = arr[0];
let currentSum = arr[0];

for (let i = 1; i < n; i++) {
  currentSum = Math.max(arr[i], currentSum + arr[i]);
  max = Math.max(max, currentSum);
}

console.log(max);
