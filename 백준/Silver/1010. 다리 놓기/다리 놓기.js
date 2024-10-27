const fs = require('fs');
const [n, ...testCaseArr] = fs.readFileSync(0).toString().trim().split("\n");
const testCase = testCaseArr.map(i => i.split(" ").map(Number));

// 조합을 직접 계산하는 함수
const combination = (n, r) => {
  if (r > n) return 0;
  if (r === 0 || r === n) return 1;
  let result = 1;
  for (let i = 0; i < r; i++) {
    result *= (n - i);
    result /= (i + 1);
  }
  return result;
};

testCase.forEach(([w, e]) => {
  const answer = combination(e, w);
  console.log(answer);
});
