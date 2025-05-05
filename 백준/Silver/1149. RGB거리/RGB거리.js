const fs = require("fs");
const [num, ...testcase] = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(num);
const arr = testcase.map((i) => i.split(" ").map(Number));

let sum = 0;
let dp = Array.from({ length: n }, () => new Array(3).fill(null));
dp[0] = arr[0];

for (let i = 1; i < n; i++) {
  dp[i][0] = arr[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]); // 빨강
  dp[i][1] = arr[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]); // 초록
  dp[i][2] = arr[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]); // 파랑
}

console.log(Math.min(...dp[n - 1]));
