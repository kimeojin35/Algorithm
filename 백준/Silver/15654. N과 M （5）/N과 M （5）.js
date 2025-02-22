const fs = require('fs')
const [[n, m], arr] = fs.readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const getPermutations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // 배열에서 n번째 인덱스부터 끝까지 자르기
    const combinations = getPermutations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

console.log(
  getPermutations(
    arr.sort((a, b) => a - b),
    m
  )
    .map((i) => i.join(" "))
    .join("\n")
);