const fs = require('fs');
const num = Number(fs.readFileSync(0));
let log = Math.floor(Math.log2(num));
let answer = Math.pow(2, log);
let count = 1;
for (let i = log; 0 <= i; i--) {
  if (answer + Math.pow(2, i) <= num) {
    answer += Math.pow(2, i);
    count++;
  }
}
console.log(count);