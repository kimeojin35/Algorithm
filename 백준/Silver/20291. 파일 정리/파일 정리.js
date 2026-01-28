const fs = require("fs");
const [n, ...arr] = fs.readFileSync(0).toString().trim().split("\n");
const list = {};
arr.map((i) => {
  const exe = i.split(".")[1];
  list[exe] = (list[exe] || 0) + 1;
});
const answer = Object.entries(list)
  .sort((a, b) => a[0].localeCompare(b[0]))
  .map((i) => i.join(" "));
console.log(answer.join("\n"));