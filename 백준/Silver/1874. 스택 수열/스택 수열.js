const fs = require('fs')
const [n, ...testcase] = fs.readFileSync(0).toString().trim().split("\n").map(Number);
let num = 1;
let stack = [];
let io = [];
let possible = true;
for (let i = 0; i < n; i++) {
  while (testcase[i] >= num) {
    stack.push(num++);
    io.push("+");
  }
  if (testcase[i] == stack[stack.length - 1]) {
    stack.pop();
    io.push("-");
  } else {
    possible = false;
    break;
  }
}
console.log(possible ? io.join("\n") : "NO");