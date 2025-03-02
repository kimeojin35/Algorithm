const fs = require('fs')
const n = Number(fs.readFileSync(0).toString());

let sum = 1;
let memo = new Array(n + 1).fill(0);
memo[1] = 1;
if (n > 1) {
  for (let i = 2; i <= n; i++) {
    memo[i] = (i % 2 == 0 ? sum + 2 : sum + 1) % 10007;
    sum += memo[i] % 10007;
  }
}
console.log(memo[n]);