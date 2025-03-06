const fs = require('fs')
const [num, testcase] = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = num.split(" ").map(Number);
const arr = testcase
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const getPermutations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

console.log(
  getPermutations(arr, m)
    .map((i) => i.join(" "))
    .join("\n")
);
