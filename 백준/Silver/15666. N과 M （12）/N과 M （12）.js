const fs = require('fs')
const [num, testcase] = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = num.split(" ").map(Number);
const arr = testcase
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

const a = getCombinations(arr, m).map((i) => i.join(" "));
const answer = a.filter((v, i) => a.indexOf(v) === i).join("\n");

console.log(answer);
