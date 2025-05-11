const fs = require('fs')
const [num, ...arr] = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(num);
arr.sort().reverse();

let count = 0;
for (let i = 0; i < n; i++) {
  let answer = [arr[i]];
  for (let j = 0; j < n; j++) {
    const filtered = answer.filter((k) => k.startsWith(arr[j])).length == 0;
    if (!arr[j].startsWith(arr[i]) && i !== j && filtered) answer.push(arr[j]);
  }
  if (count < answer.length) count = answer.length;
}
console.log(count);