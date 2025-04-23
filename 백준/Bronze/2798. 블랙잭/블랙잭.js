const fs = require("fs");
const [num, testcase] = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = num.split(" ").map(Number);
const arr = testcase.split(" ").map(Number);

let count = 0;
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      if (arr[i] + arr[j] + arr[k] <= m && arr[i] + arr[j] + arr[k] > count)
        count = arr[i] + arr[j] + arr[k];
    }
  }
}

console.log(count);