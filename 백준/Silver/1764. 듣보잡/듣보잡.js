const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const unheard = new Set();
for (let i = 1; i <= N; i++) {
  unheard.add(input[i]);
}

const result = [];
for (let i = N + 1; i <= N + M; i++) {
  if (unheard.has(input[i])) {
    result.push(input[i]);
  }
}

result.sort();

let output = result.length + "\n";
output += result.join("\n");
console.log(output);