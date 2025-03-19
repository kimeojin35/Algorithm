const fs = require('fs')
const [k, ...arr] = fs.readFileSync(0).toString().trim().split("\n").map(Number);
let stack = [];
for (const i of arr) {
  if (i == 0) stack.pop();
  else stack.push(i);
}
console.log(stack.length > 0 ? stack.reduce((acc, i) => (acc += i)) : 0);