const fs = require("fs");
const [n, numArr] = fs.readFileSync(0).toString().trim().split("\n");
const arr = numArr
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let max = 0;
let res = -1;

for (let i = 1; i < Number(n); i++) {
  // 1부터 n까지 돌면서
  const diff = Math.floor((arr[i] - arr[i - 1]) / 2); // 현재 값에 이전 배열 값을 빼고 2로 나누기

  if (max < diff) { // max보다 diff가 더 크면
    max = diff; // max에 diff 대입
    res = Math.floor((arr[i] + arr[i - 1]) / 2);
  }
}

console.log(res);
