const fs = require('fs')
const [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
const arr = new Array(n).fill(null).map((_, i) => i + 1);

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

getCombinations(arr, m).map((i) => console.log(i.join(" ")));
