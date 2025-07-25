const fs = require("fs");
const [[n, m], ...paper] = fs.readFileSync(0).toString().trim().split("\n").map((line) => line.split(" ").map(Number));
const blocks = [
  [[1, 1, 1, 1]],
  [
    [1, 1],
    [1, 1],
  ],
  [
    [1, 0],
    [1, 0],
    [1, 1],
  ],
  [
    [1, 0],
    [1, 1],
    [0, 1],
  ],
  [
    [1, 1, 1],
    [0, 1, 0],
  ],
];
function rotate(shape) {
  const rows = shape.length;
  const cols = shape[0].length;
  const result = Array.from({ length: cols }, () => Array(rows).fill(0));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[j][rows - 1 - i] = shape[i][j];
    }
  }
  return result;
}

function flip(shape) {
  return shape.map((row) => [...row].reverse());
}

function generateVariants(blocks) {
  const variants = [];

  for (const shape of blocks) {
    const set = new Set();
    let current = shape;

    for (let i = 0; i < 4; i++) {
      set.add(JSON.stringify(current));
      set.add(JSON.stringify(flip(current)));
      current = rotate(current);
    }

    variants.push([...set].map((s) => JSON.parse(s)));
  }

  return variants;
}

const blockVariants = generateVariants(blocks);

let maxSum = 0;

for (const variants of blockVariants) {
  for (const shape of variants) {
    const height = shape.length;
    const width = shape[0].length;

    for (let i = 0; i <= n - height; i++) {
      for (let j = 0; j <= m - width; j++) {
        let sum = 0;

        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            if (shape[y][x] === 1) {
              sum += paper[i + y][j + x];
            }
          }
        }

        maxSum = Math.max(maxSum, sum);
      }
    }
  }
}

console.log(maxSum);