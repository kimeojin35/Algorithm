const fs = require('fs')
const n = Number(fs.readFileSync(0));
const arr = new Array(n).fill(null).map((_, i) => i + 1);

const getPermutations = (arr, n) => {
  const results = [];
  if (n === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, n - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
};

console.log(getPermutations(arr, n).map((i) => i.join(" ")).join("\n"));
