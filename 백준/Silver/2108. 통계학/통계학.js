const fs = require('fs')
const [n, ...arr] = fs.readFileSync(0).toString().trim().split("\n").map(Number);
// 산술 평균
const arithmeticMean = Math.round(arr.reduce((acc, i) => (acc += i)) / n);

// 중앙값
const median = arr.sort((a, b) => a - b)[(n - 1) / 2];

// 최빈값
let count = {};
let maxFreq = 0;
let modeArr = [];
arr.map((i) => {
  count[i] = (count[i] || 0) + 1;
  maxFreq = Math.max(maxFreq, count[i]);
});
for (const key in count) {
  if (count[key] === maxFreq) {
    modeArr.push(Number(key));
  }
}
modeArr.sort((a, b) => a - b);
const mode = modeArr.length == 1 ? modeArr[0] : modeArr[1];

// 범위
const range = arr[n - 1] - arr[0];
console.log([arithmeticMean, median, mode, range].join("\n"));