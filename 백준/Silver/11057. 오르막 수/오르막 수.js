const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

const dp = [[], new Array(10).fill(1)];
for (let i = 2; i <= n; i++) {
  dp[i] = [];
  dp[i][0] = dp[i - 1][0] % 10007;
  for (let j = 1; j < 10; j++) {
    dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 10007;
  }
}

console.log(dp[n].reduce((acc, a) => acc + a, 0) % 10007);