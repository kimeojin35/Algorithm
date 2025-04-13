const fs = require('fs')
const [_, testcase] = fs.readFileSync(0).toString().trim().split("\n");
const arr = testcase.split(" ").map(Number);

const dp = [];
arr.map((n) => {
  let left = 0; // 왼쪽
  let right = dp.length; // 오른쪽
  while (left < right) {
    // 왼쪽보다 오른쪽이 클 동안
    const mid = Math.floor((left + right) / 2); // 중간값 구하기
    if (dp[mid] < n)
      left =
        mid + 1; // 만약 중간값이 현재 arr값보다 작다면 왼쪽 인덱스에 중간값 + 1
    else right = mid; // 아니라면 오른쪽 값에 중간값을 넣기
  }
  dp[left] = n; // dp의 왼쪽 인덱스 위치에 현재 arr값 넣기
});

console.log(dp.length);