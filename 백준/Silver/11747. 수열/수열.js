const fs = require('fs')
const [num, ...arr] = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(num);
const d = arr.join("").replace(/ /g, "");
let count = 0;
let answer = -1;

for (let i = 1; i <= n; i++) {
  if (answer !== -1) break;
  let result = [];
  for (let j = 0; j < n - i + 1; j++) {
    const sliceNum = Number(d.slice(j, j + i));
    if (
      !result.includes(sliceNum) &&
      (sliceNum >= 10 ** (i - 1) || (sliceNum == 0 && i == 1))
    )
      result.push(sliceNum);
  }
  result.sort((a, b) => a - b);

  for (let k = 0; k < result.length; k++) {
    if (result[k] !== count) {
      answer = count;
      break;
    }
    count++;
  }
}
console.log(answer);