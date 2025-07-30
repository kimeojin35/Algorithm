const fs = require('fs')
const [num, testcase] = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(num);
const arr = testcase.split(" ").map(Number);
let obj = {};
let count = 0;
[...arr].sort((a, b) => a - b).map((i, idx, origin) => {
  if (!obj[i]) obj[i] = count;
  if (i !== origin[idx + 1]) count++;
});
console.log(arr.map((i) => obj[i]).join(" "));