const fs = require('fs');
const [num, ...testcase] = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = num.split(" ").map(Number);
const arr = testcase.slice(0, n).map(line => line.split("").map(Number));
const k = Number(testcase[n]);

// 각 행을 문자열로 묶어서 몇 번 나오는지 세기
const map = new Map();
for (let i = 0; i < n; i++) {
  const row = arr[i];
  const rowStr = row.join("");
  let zeroCount = row.filter(v => v === 0).length;

  // 해당 행을 켜기 위한 조건 확인
  if (zeroCount <= k && (k - zeroCount) % 2 === 0) {
    map.set(rowStr, (map.get(rowStr) || 0) + 1);
  }
}

let answer = 0;
for (let count of map.values()) {
  answer = Math.max(answer, count);
}
console.log(answer);