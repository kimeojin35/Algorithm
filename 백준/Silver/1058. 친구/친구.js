const fs = require('fs')
const [num, ...testcase] = fs.readFileSync(0).toString().trim().split("\n");
const arr = testcase.map((line) => line.split(""));
const n = Number(num);
let max = 0;

for (let i = 0; i < n; i++) {
  const visited = new Array(n).fill(false);
  for (let j = 0; j < n; j++) {
    if (i === j) continue;
    if (arr[i][j] === "Y") visited[j] = true;
    else {
      for (let k = 0; k < n; k++) {
        if (arr[i][k] === "Y" && arr[k][j] === "Y") visited[j] = true;
      }
    }
  }
  const count = visited.filter(Boolean).length;
  if (count > max) max = count;
}

console.log(max);