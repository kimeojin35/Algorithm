const fs = require('fs')
const [t, ...arr] = fs.readFileSync(0).toString().trim().split("\n").map(Number);

const padovan = (n) => {
  let dp = new Array(n).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 3];
  }
  return dp[n - 1];
};

arr.map((n) => console.log(padovan(n)));