const fs = require('fs')
let [n, ...arr] = fs.readFileSync(0).toString().trim().split("\n");
n = Number(n);
arr = arr.map((i) => i.split(" ").map(Number));

const dp = new Array(n + 1).fill(0);

for (let i = n - 1; i >= 0; i--) {
  const [t, p] = arr[i]; // 상담 기간과 수익
  if (i + t <= n) {
    dp[i] = Math.max(dp[i + 1], dp[i + t] + p);
  } else {
    dp[i] = dp[i + 1]; // 상담 불가능하면 다음 날의 최대 이익을 그대로 가져옴
  }
}

console.log(dp[0]); // 최대 수익 출력