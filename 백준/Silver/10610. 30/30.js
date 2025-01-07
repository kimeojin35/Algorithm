const fs = require("fs");
const n = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("")
  .map(Number)
  .sort((a, b) => b - a);
n.sort((a, b) => b - a);

const sum = n.reduce((acc, cur) => acc + cur);

console.log(sum % 3 === 0 && n.includes(0) ? n.join("") : -1);
