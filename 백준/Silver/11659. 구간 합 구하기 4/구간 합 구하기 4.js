const fs = require('fs')
const [num, arr, ...test] = fs.readFileSync(0).toString().trim().split("\n");
const numbers = arr.split(" ").map(Number);
const testcase = test.map((i) => i.split(" ").map(Number));

// prefixSum 배열을 구합니다.
const prefixSum = [0]; // 시작을 0으로 설정하여 간편하게 구간 합을 계산
for (let i = 0; i < numbers.length; i++) {
  prefixSum[i + 1] = prefixSum[i] + numbers[i];
}

// 각 테스트 케이스에 대해 구간 합을 계산합니다.
testcase.map(([n, m]) => {
  const sum = prefixSum[m] - prefixSum[n - 1];
  console.log(sum);
});
