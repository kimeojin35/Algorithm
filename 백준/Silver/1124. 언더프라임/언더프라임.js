const fs = require('fs')
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const isPrime = (n) => {
  if (n <= 1) return false;
  if (n % 2 == 0) return n == 2 ? true : false;
  const sqrt = parseInt(Math.sqrt(n));
  for (let i = 3; i <= sqrt; i += 2) if (n % i == 0) return false;
  return true;
};

const primeNum = (n) => {
  let m = n;
  let c = 0;
  let d = 2;
  while (m >= 2) {
    if (m % d === 0) {
      c++
      m = m / d;
    } else d++;
  }
  return isPrime(c);
};

let count = 0;
for (let i = a; i <= b; i++) {
  if (primeNum(i)) count++;
}

console.log(count);