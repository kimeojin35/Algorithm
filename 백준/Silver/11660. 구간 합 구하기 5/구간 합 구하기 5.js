const fs = require('fs')
const [[n, m], ...testcase] = fs.readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));
const arr = testcase.slice(0, n);
const xy = testcase.slice(n);
for (let i = 0; i < n; i++) {
  for (let j = 1; j < n; j++) {
    arr[i][j] += arr[i][j - 1];
  }
}

let answer = "";
xy.map(([x1, y1, x2, y2]) => {
  let sum = 0;
  for (let i = x1 - 1; i < x2; i++) {
    sum = sum + arr[i][y2 - 1] - (y1 - 2 < 0 ? 0 : arr[i][y1 - 2]);
  }
  answer += `${sum}\n`;
});

console.log(answer);