const fs = require("fs");
const [n, ...input] = fs.readFileSync(0).toString().trim().split("\n");
const arr = input.map((line) => line.split(" ").map(Number));
let answer = [];

const getCombinations = (arr, s) => {
  const res = [];
  if (s === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const com = getCombinations(rest, s - 1);
    const att = com.map((el) => [fixed, ...el]);
    res.push(...att);
  });

  return res;
};

const gcd = (a, b) => {
  while (b !== 0) [a, b] = [b, a % b];
  return a;
};

const lcm = (a, b) => (a * b) / gcd(a, b);
arr.map((i) => {
  getCombinations(i, 2).forEach(([a, b]) => answer.push(lcm(a, b)));
});

console.log(answer.join("\n"));