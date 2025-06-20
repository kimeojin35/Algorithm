const fs = require('fs')
const [num, ...arr] = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(num);
let answer = "";
arr.map((line) => {
  const a = line.split("");
  let isOk = true;
  let stack = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] == "(") stack.push(1);
    else if (a[i] == ")" && stack.length == 0) {
      isOk = false;
      break;
    } else stack.pop();
  }
  answer += `${isOk && stack.length == 0 ? "YES" : "NO"}\n`;
});
console.log(answer);