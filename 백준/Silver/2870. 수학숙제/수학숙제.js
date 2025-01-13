const fs = require("fs");
const [m, ...arr] = fs.readFileSync(0).toString().trim().split("\n");
const num = [];
arr.map((i) => {
  const a = i
    .split(/[a-z]+/)
    .filter((str) => str !== "")
    .map((str) => str.replace(/^0+/, "") || "0");
  num.push(...a);
});
num
  .sort((a, b) => a - b)
  .map((i) => {
    console.log(i);
  });
