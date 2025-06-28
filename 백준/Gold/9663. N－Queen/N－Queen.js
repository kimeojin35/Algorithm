const fs = require('fs')
const n = Number(fs.readFileSync(0).toString());
let count = 0;
let check = new Array(n).fill(false);
let diag1 = new Array(n * 2).fill(false);
let diag2 = new Array(n * 2).fill(false);
const backtracking = (r) => {
  if (r == n) {
    count++;
    return;
  }
  for (let i = 0; i < n; i++) {
    if (!check[i] && !diag1[r - i + n] && !diag2[r + i]) {
      check[i] = diag1[r - i + n] = diag2[r + i] = true;
      backtracking(r + 1);
      check[i] = diag1[r - i + n] = diag2[r + i] = false;
    }
  }
};
backtracking(0);
console.log(count);