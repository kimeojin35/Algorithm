const fs = require('fs')
const [[n, k], ...arr] = fs.readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));
arr.sort(([a, _], [b, _2]) => b - a);
let dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= k; j++) {
    if (arr[i - 1][0] > j) dp[i][j] = dp[i - 1][j];
    else
      dp[i][j] = Math.max(
        dp[i - 1][j],
        dp[i - 1][j - arr[i - 1][0]] + arr[i - 1][1]
      );
  }
}

console.log(dp[n][k]);
