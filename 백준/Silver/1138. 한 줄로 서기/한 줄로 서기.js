const fs = require('fs')
const [num, testcase] = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(num);
let arr = testcase.split(" ").map((item, idx) => [idx + 1, Number(item)]).sort((a, b) => a[1] - b[1]);
for (let h of arr) {
  for (let i = 0; i < n; i++) {
    if (
      arr[i][1] !== arr.slice(0, i + 1).filter((j) => arr[i][0] < j[0]).length
    ) {
      const tmp = arr[i - 1];
      arr[i - 1] = arr[i];
      arr[i] = tmp;
    }
  }
}
console.log(arr.map((i) => i[0]).join(" "));