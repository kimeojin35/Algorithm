const fs = require("fs");
const [num, ...list] = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = num.split(" ").map(Number);
let count = {};
list.map((word) => {
  if (word.length < m) return;
  count[word.trim()] = (count[word.trim()] || 0) + 1;
});
const sorted = Object.entries(count).sort((a, b) => b[1] - a[1] || b[0].length - a[0].length || a[0].localeCompare(b[0])).map((w) => w[0]);
console.log(sorted.join("\n"));