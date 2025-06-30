const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split("\n").map((i) => Number(i) % 42);
let answer = new Set([]);
arr.map((i) => {
  if (!answer.has(i)) answer.add(i);
});
console.log(answer.size);