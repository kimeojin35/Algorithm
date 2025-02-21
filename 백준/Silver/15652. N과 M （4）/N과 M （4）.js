const fs = require('fs')

const [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const getCombinationsWithRepetition = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index); // 중복 선택을 허용하기 위해 index부터 슬라이싱
    const combinations = getCombinationsWithRepetition(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

const arr = new Array(n).fill(null).map((_, i) => i + 1);
console.log(
  getCombinationsWithRepetition(arr, m)
    .map((i) => i.join(" "))
    .join("\n")
);
