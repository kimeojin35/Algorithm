const fs = require('fs')
const [num, testcase] = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = num.split(" ").map(Number);
const before = testcase.split(" ").map(Number).sort((a, b) => a - b);
const arr = Array.from(new Set(before));

const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, _, origin) => {
    const permutations = getPermutations(origin, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
};

console.log(getPermutations(arr, m).map((i) => i.join(" ")).join("\n"));