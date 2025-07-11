const fs = require('fs')
const [n, m, arr] = fs.readFileSync(0).toString().trim().split("\n");
const str = "I" + "OI".repeat(Number(n));
const len = str.length;
let count = 0;
for (let i = 0; i < Number(m); i++) {
  if (arr.slice(i, i + len) == str) count++;
}
console.log(count);