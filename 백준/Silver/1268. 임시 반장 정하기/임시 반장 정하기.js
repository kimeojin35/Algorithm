const fs = require('fs');
const [n, ...testCaseArr] = fs.readFileSync(0).toString().trim().split('\n')
const testCase = testCaseArr.map((line) => line.split(" ").map(Number));
const num = Number(n);

const counts = Array(num).fill(0); // [0, 0, 0, 0, 0]

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    if (i === j) continue; // i랑 j 같으면 점프
    for (let grade = 0; grade < 5; grade++) { // 1학년부터 5학년까지 돌면서
      if (testCase[i][grade] === testCase[j][grade]) { // 
        counts[i]++;
        break;
      }
    }
  }
}

const maxCount = Math.max(...counts);
const tempLeader = counts.indexOf(maxCount) + 1;

console.log(tempLeader);