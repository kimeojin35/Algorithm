const fs = require("fs");
const [n, ...input] = fs.readFileSync(0).toString().trim().split("\n");
const arr = input.map((line) => line.split(" ").map(Number));
let answer = [];

const gcd = (a, b) => {
  while (b !== 0) [a, b] = [b, a % b];
  return a;
};

const lcm = (a, b) => (a * b) / gcd(a, b);

arr.map(([a, b]) => answer.push(lcm(a, b)));
console.log(answer.join("\n"));