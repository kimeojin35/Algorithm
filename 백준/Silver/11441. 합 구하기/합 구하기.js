const fs = require('fs')
const [num, a, m, ...testcase] = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(num);
const arr = a.trim().split(" ").map(Number);
const test = testcase.map((i) => i.trim().split(" ").map(Number));

let answer = "";
const prefixSum = new Array(n).fill(0);
prefixSum[0] = arr[0];

for (let i = 1; i < n; i++) {
  prefixSum[i] = prefixSum[i - 1] + arr[i];
}

for (const [i, j] of test) {
  const sum = prefixSum[j - 1] - (prefixSum[i - 2] || 0);
  answer += `${sum}\n`;
}

console.log(answer);