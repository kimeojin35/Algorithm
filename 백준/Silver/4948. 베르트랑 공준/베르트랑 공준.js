const fs = require('fs')
const arr = fs.readFileSync(0).toString().trim().split("\n").map(Number).slice(0, -1);
let answer = new Array(arr.length).fill(0);

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num % 2 == 0) return num == 2 ? true : false;
  const sqrt = parseInt(Math.sqrt(num));
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i == 0) return false;
  }
  return true;
};

arr.map((n, idx) => {
  let count = 0;
  const n2 = n * 2;
  for (let j = n + 1; j <= n2; j++) {
    if (isPrime(j)) count++;
  }
  answer[idx] = count;
});

console.log(answer.join("\n"));