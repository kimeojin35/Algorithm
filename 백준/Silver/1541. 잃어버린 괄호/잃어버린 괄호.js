const fs = require('fs')
const arr = fs.readFileSync(0).toString().trim().split("-");
const first = arr[0]
  .split("+")
  .map(Number)
  .reduce((a, b) => a + b, 0);
const rest = arr
  .slice(1)
  .map((part) =>
    part
      .split("+")
      .map(Number)
      .reduce((a, b) => a + b, 0)
  )
  .reduce((a, b) => a + b, 0);
console.log(first - rest);