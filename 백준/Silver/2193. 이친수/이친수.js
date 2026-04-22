const fs = require('fs')
const n = Number(fs.readFileSync(0).toString().trim())
const dp = Array.from({ length: n + 1 }, () => [0, 0]);

dp[1][0] = 0;
dp[1][1] = 1;

for (let i = 2; i <= n; i++) {
  dp[i][0] = BigInt(dp[i - 1][0] + dp[i - 1][1]);
  dp[i][1] = BigInt(dp[i - 1][0]);
}

console.log((dp[n][0] + dp[n][1]).toString());