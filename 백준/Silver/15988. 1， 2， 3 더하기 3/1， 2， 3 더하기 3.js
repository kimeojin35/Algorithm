const fs = require('fs')
const [t, ...arr] = fs.readFileSync(0).toString().trim().split("\n").map(Number);
const answer = [];
const max = Math.max(...arr);
let f = new Array(max + 1).fill(0);
f[1] = 1;
f[2] = 2;
f[3] = 4;
for (let i = 4; i <= max; i++)
  f[i] = (f[i - 1] + f[i - 2] + f[i - 3]) % 1000000009;

arr.map((i) => answer.push(f[i]));
console.log(answer.join("\n"));