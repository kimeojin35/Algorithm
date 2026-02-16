const fs = require("fs");
const [[n, c], [...arr]] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));
let obj = new Map();
arr.map((i) => obj.set(i, (obj.get(i) || 0) + 1));
let answer = "";
Array.from(obj)
  .sort(([n1, a], [n2, b]) => b - a)
  .map(([key, value]) => (answer += `${key} `.repeat(value)));
console.log(answer.trim());