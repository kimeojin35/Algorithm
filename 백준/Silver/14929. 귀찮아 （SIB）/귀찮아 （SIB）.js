const fs = require("fs");
const [n, arr] = fs.readFileSync(0).toString().trim().split("\n");
const x = arr.split(" ").map(Number);

let sum = 0;
let sumSq = 0;

for (let i = 0; i < x.length; i++) {
  sum += x[i];
  sumSq += x[i] * x[i];
}

const answer = (sum * sum - sumSq) / 2;

console.log(answer);