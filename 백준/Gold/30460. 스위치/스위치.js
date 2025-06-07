const fs = require('fs')
const [[n], arr] = fs.readFileSync(0).toString().trim().split("\n").map((line) => line.split(" ").map(Number));
const dp = new Array(n + 3).fill(0);
for (let i = n - 1; i >= 0; i--) {
  const press = 2 * arr[i] + 2 * (arr[i + 1] || 0) + 2 * (arr[i + 2] || 0) + dp[i + 3];
  const notPress = arr[i] + dp[i + 1];
  dp[i] = Math.max(press, notPress);
}
console.log(dp[0]);