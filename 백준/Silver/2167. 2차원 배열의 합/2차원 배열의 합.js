const fs = require('fs')
const input = fs.readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());
const [n, m] = input[0].split(/\s+/).map(Number);
const matrix = input
  .slice(1, 1 + n)
  .map((line) => line.trim().split(/\s+/).map(Number));
const queryCount = Number(input[1 + n].trim());
const queries = input.slice(2 + n, 2 + n + queryCount).map((line) =>
  line
    .trim()
    .split(/\s+/)
    .map((num) => Number(num) - 1)
);

let prefixSum = [...matrix];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    let currentSum = 0;
    if (j > 0) currentSum += prefixSum[i][j - 1];
    currentSum += matrix[i][j];
    prefixSum[i][j] = currentSum;
  }
}

queries.map(([i, j, x, y]) => {
  let sum = 0;
  for (let col = i; col <= x; col++) {
    sum += prefixSum[col][y];
  }
  if (j > 0) {
    for (let col = i; col <= x; col++) {
      sum -= prefixSum[col][j - 1];
    }
  }
  console.log(sum);
});
