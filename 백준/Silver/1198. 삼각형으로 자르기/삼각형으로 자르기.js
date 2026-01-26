const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

const N = input[0];
const pts = [];
for (let i = 0; i < N; i++) {
  pts.push([input[1 + i * 2], input[2 + i * 2]]);
}

// 벡터 외적의 절댓값 / 2 = 삼각형 넓이
function triangleArea(a, b, c) {
  return Math.abs(
    (b[0] - a[0]) * (c[1] - a[1]) -
    (b[1] - a[1]) * (c[0] - a[0])
  ) / 2;
}

let ans = 0;

// 모든 i < j < k 삼각형 검사
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      ans = Math.max(ans, triangleArea(pts[i], pts[j], pts[k]));
    }
  }
}

console.log(ans.toFixed(10));