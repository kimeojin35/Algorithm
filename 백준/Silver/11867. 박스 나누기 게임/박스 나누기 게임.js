const fs = require('fs')
let [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let win = true;
if (n % 2 == 1 && m % 2 == 1) win = false;

console.log(win ? "A" : "B");