const fs = require('fs')
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let answer = b;
let count = 0;

while (answer > a) {
  const str = answer.toString();
  if (answer % 2 == 0) answer /= 2;
  else if (str[str.length - 1] == "1") answer = Number(str.slice(0, str.length - 1));
  else break;
  count++;
}

console.log(answer == a ? count + 1 : -1);