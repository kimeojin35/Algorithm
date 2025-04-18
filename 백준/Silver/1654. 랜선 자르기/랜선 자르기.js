const fs = require('fs')
const [num, ...lines] = fs.readFileSync(0).toString().trim().split("\n");
const [k, n] = num.split(" ").map(Number);
const arr = lines.map(Number)

let min = 1;
let max = Math.max(...arr);

while (min <= max) {
  let mid = parseInt((max + min) / 2);
  let piece = arr.map((i) => parseInt(i / mid)).reduce((acc, i) => acc + i, 0);
  if (piece >= n) min = mid + 1;
  else max = mid - 1;
}

console.log(max);