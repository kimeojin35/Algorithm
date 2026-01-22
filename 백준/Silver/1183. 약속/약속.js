const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const time = input.slice(1).map(v => v.split(" ").map(Number));
const d = time.map(([a, b]) => b - a).sort((a, b) => a - b);

let answer;
if (n % 2 === 1) {
  answer = 1;
} else {
  const left = d[n / 2 - 1];
  const right = d[n / 2];
  answer = right - left + 1;
}

console.log(answer);