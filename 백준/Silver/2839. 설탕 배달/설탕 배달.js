const fs = require('fs');
const n = Number(fs.readFileSync(0));

let remain = n % 5;

while (remain <= n) {
  if (remain % 3 !== 0) remain += 5;
  else break;
}
const answer = Math.floor((n - remain) / 5) + remain / 3;
if (Number.isInteger(answer) && Math.sign(Math.floor((n - remain) / 5)) !== -1)
  console.log(answer);
else console.log(-1);
