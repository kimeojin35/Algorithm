const fs = require('fs')
const [num, ...testcase] = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(num);
const arr = testcase.map((i) => i.split(" ").map(Number));

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][k] && arr[k][j]) {
        arr[i][j] = 1;
      }
    }
  }
}

console.log(arr.map((i) => i.join(" ")).join("\n"));