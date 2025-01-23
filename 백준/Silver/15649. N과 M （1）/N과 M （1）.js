const fs = require('fs')
const [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
const arr = new Array(n).fill(null).map((_, i) => i + 1);

const getPermutations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

getPermutations(arr, m).map((i) => console.log(i.join(" ")));
