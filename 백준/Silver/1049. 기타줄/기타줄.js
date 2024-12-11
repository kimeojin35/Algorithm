const fs = require("fs")
const [num, ...guitarStr] = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = num.split(" ").map(Number);
const guitarPriceArr = guitarStr.map((i) => i.split(" ").map(Number));

let setMoney = 0,
  eachMoney = 0;
let minSet = 1000,
  minEach = 1000;
guitarPriceArr.map(([s, e], i) => {
  if (minSet > s) minSet = s;
  if (minEach > e) minEach = e;
});

setMoney = Math.floor(n / 6) * minSet;
eachMoney = (n % 6) * minEach;

if ((n % 6) * minEach > minSet) {
  eachMoney = minSet;
}

if (minEach * 6 < minSet) {
  setMoney = 0;
  eachMoney = n * minEach;
}

console.log(setMoney + eachMoney);