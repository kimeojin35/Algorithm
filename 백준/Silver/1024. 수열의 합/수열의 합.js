const fs = require('fs')
let [n, l] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let found = false;
for (let len = l; len <= 100; len++) {
  const numerator = n - (len * (len - 1)) / 2;
  if (numerator < 0) break;
  if (numerator % len === 0) {
    const start = numerator / len;
    const answer = Array.from({ length: len }, (_, i) => start + i);
    console.log(answer.join(" "));
    found = true;
    break;
  }
}

if (!found) console.log(-1);