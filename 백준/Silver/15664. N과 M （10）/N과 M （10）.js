const fs = require('fs')
const [num, testcase] = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = num.split(" ").map(Number);
const arr = testcase
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const getCombinations = (arr, selectNumber) => {
  const results = new Set();

  const backtrack = (start, path) => {
    if (path.length === selectNumber) {
      const key = path.sort((a, b) => a - b).join(",");
      results.add(key);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      backtrack(i + 1, [...path, arr[i]]);
    }
  };

  backtrack(0, []);
  return Array.from(results).map((str) => str.split(",").map(Number)); // 다시 숫자 배열로 변환
};

console.log(
  getCombinations(arr, m)
    .map((i) => i.join(" "))
    .join("\n")
);
