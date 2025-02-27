const fs = require('fs')
const testcase = fs.readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));
const obj = new Object();
testcase.map((_, i) => {
  obj[i + 1] = [];
});
testcase.map(([x, y]) => {
  obj[x].push(y);
  obj[y].push(x);
});

Object.values(obj).map((arr, i) => {
  if (arr.length == 3) {
    const [n1, n2, n3] = arr.map((i) => obj[i].length).sort((a, b) => a - b);
    if (n1 == 1 && n2 == 2 && n3 == 3) console.log(i + 1);
  }
});
