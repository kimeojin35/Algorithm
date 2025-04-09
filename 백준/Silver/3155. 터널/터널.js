const fs = require('fs')
const [num, arrA, arrB] = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(num);
const a = arrA.split(" ").map(Number);
const b = arrB.split(" ").map(Number);

let count = [];
let now = 0;
for (let i = 0; i < n; i++) {
  if (a[i + 1] <= now) now = a[i + 1] - 1;
  else if (b[i + 1] >= now) now = b[i + 1] + 1;
  count.push(now);
}

console.log(count.join(" "));