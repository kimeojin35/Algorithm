const fs = require('fs')
const n = Number(fs.readFileSync(0).toString());

let count = 0;
let dp = Array.from({ length: n + 1 }, () => Array(3).fill(0));
dp[0] = [1, 0, 0];

for (let i = 1; i <= n; i++) {
  dp[i][0] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % 9901;
  dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % 9901;
  dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % 9901;
}

console.log((dp[n][0] + dp[n][1] + dp[n][2]) % 9901);