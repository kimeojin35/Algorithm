const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());
const arr = Array({ length: n }, (_, i) => i + 1);
let res = [];
const hanoi = (num, a, c, b) => {
  if (num == 1) {
    res.push([a, c]);
    return;
  }
  hanoi(num - 1, a, b, c);
  res.push([a, c]);
  hanoi(num - 1, b, c, a);
};
hanoi(n, 1, 3, 2);
console.log(res.length + "\n" + res.map((i) => i.join(" ")).join("\n"));