const fs = require('fs');
let [n, arr] = fs.readFileSync(0).toString().trim().split("\n");
n = Number(n);

let a = arr.split(" ").map(Number);
const modifyArr = arr
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let p = new Array(n).fill(null);

modifyArr.map((num, index) => {
  const arrIndex = a.indexOf(num);
  p[arrIndex] = index;
  a[arrIndex] = null;
});

console.log(p.join(" "));