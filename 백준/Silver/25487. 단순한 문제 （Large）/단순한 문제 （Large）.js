const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");
let result = "";
for (let i = 1; i <= Number(input[0]); i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  result += Math.min(a, b, c) + "\n";
}

console.log(result);
