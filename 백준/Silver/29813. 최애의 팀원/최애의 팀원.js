const fs = require('fs')
const [n, ...arr] = fs.readFileSync(0).toString().trim().split("\n");
let a = arr.map((i) => i.split(" "));
for (let i = 0; i < Math.floor(n / 2); i++) {
  const [_, firstNum] = a.shift();
  let index = (Number(firstNum) % a.length) - 1;
  index = index == -1 ? a.length - 1 : index;
  a.splice(index, 1);
  a = [...a.slice(index, a.length), ...a.slice(0, index)];
}

console.log(a[0][0]);