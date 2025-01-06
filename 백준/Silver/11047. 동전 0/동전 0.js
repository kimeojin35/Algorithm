const fs = require('fs');
const [num, ...coinArr] = fs.readFileSync(0).toString().trim().split("\n");
let [n, k] = num.split(" ").map(Number)
const arr = coinArr.map(Number).sort((a, b) => b - a)

let count = 0;
arr.map((i) => {
  const temp = Math.floor(k / i);
  k -= i * temp;
  count += temp;
});

console.log(count);