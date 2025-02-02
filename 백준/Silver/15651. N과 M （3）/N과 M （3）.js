const input = require('fs') // 예제 입력

const [N, M] = input.readFileSync(0).toString().trim().split(" ").map(Number);
const result = [];
const temp = [];

function backtrack(depth) {
  if (depth === M) {
    result.push(temp.join(" ")); // 결과를 배열에 저장
    return;
  }

  for (let i = 1; i <= N; i++) {
    temp.push(i);
    backtrack(depth + 1);
    temp.pop();
  }
}

backtrack(0);
console.log(result.join("\n")); // 한 번에 출력