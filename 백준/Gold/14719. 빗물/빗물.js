const fs = require("fs");
const [[h, w], arr] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const leftMax = Array(w);
const rightMax = Array(w);

// 왼쪽 최대
leftMax[0] = arr[0];
for (let i = 1; i < w; i++) {
  leftMax[i] = Math.max(leftMax[i - 1], arr[i]);
}

// 오른쪽 최대
rightMax[w - 1] = arr[w - 1];
for (let i = w - 2; i >= 0; i--) {
  rightMax[i] = Math.max(rightMax[i + 1], arr[i]);
}

// 물 계산
let water = 0;
for (let i = 0; i < w; i++) {
  water += Math.min(leftMax[i], rightMax[i]) - arr[i];
}

console.log(water);