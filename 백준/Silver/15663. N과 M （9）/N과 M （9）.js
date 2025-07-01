const fs = require('fs')
const [[n, m], testcase] = fs.readFileSync(0).toString().trim().split("\n").map((i) => i.split(" ").map(Number));
const arr = testcase.sort((a, b) => a - b);

const getPermutations = function (arr, s) {
  const results = [];
  if (s === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, s - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

console.log([...new Set(getPermutations(arr, m).map((i) => i.join(" ")))].join("\n"));