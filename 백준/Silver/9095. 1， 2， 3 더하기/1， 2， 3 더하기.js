const fs = require('fs')
let [n, ...arr] = fs.readFileSync(0).toString().trim().split("\n").map(Number);

const f = (n) => {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 4;
  let sum = 0;
  for (let i = 1; i <= 3; i++) {
    sum += f(n - i);
  }
  return sum;
};

arr.map((num) => console.log(f(num)));
