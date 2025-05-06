const fs = require('fs')
const [num, ...testcase] = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(num);
const arr = testcase.map((i) => i.split(" ").map(Number));

for (let i = n - 2; i >= 0; i--) {
  for (let j = 0; j < arr[i].length; j++) {
    arr[i][j] += Math.max(arr[i + 1][j], arr[i + 1][j + 1]);
  }
}

console.log(arr[0][0]);