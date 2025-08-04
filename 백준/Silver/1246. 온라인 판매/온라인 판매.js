const fs = require('fs');
const [first, ...rest] = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = first.split(' ').map(Number);
const arr = rest.map(Number).sort((a, b) => a - b);

let maxProfit = 0;
let bestPrice = 0;

for (let i = 0; i < m; i++) {
  const price = arr[i];
  const buyers = m - i;
  const count = Math.min(buyers, n);
  const profit = price * count;

  if (profit > maxProfit) {
    maxProfit = profit;
    bestPrice = price;
  }
}

console.log(bestPrice, maxProfit);