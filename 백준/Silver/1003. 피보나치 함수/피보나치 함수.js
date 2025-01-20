const fs = require('fs')
const [num, ...arr] = fs.readFileSync(0).toString().trim().split("\n").map(Number);

const fn = (n) => {
  const dp = new Array(n + 1).fill(0).map(() => [0, 0]);
  dp[0] = [1, 0];
  if (n >= 1) dp[1] = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i][0] = dp[i - 1][0] + dp[i - 2][0];
    dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
  }
  console.log(dp[n][0], dp[n][1]);
};

arr.map((i) => fn(i));
