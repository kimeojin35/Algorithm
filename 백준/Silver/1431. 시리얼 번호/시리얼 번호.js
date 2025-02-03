const fs = require('fs')
const [n, ...arr] = fs.readFileSync(0).toString().trim().split("\n");
const serialNumbers = arr.sort((a, b) => {
  if (a.length == b.length) {
    const sumA = a.split("").reduce((acc, i) => {
      return !isNaN(i) ? (acc += Number(i)) : (acc += 0);
    }, 0);
    const sumB = b.split("").reduce((acc, i) => {
      return !isNaN(i) ? (acc += Number(i)) : (acc += 0);
    }, 0);
    if (sumB > sumA) return -1;
    else if (sumB < sumA) return 1;
    else return a > b ? 1 : -1;
  } else return a.length - b.length;
});

console.log(serialNumbers.join("\n"));
