const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(" ");

let minDiff = Infinity;

for (let i = 0; i <= b.length - a.length; i++) {
  let diff = 0;
  for (let j = 0; j < a.length; j++) {
    if (a[j] !== b[i + j]) diff++;
  }
  if (diff < minDiff) minDiff = diff;
}

console.log(minDiff);
