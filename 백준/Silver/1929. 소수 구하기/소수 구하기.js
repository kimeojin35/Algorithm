const fs = require('fs')

const [start, end] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const isPrime = (n) => {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

for (let i = start; i <= end; i++) {
  if (isPrime(i)) console.log(i);
}