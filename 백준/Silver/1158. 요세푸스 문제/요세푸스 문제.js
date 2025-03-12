const fs = require('fs');
const [n, k] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let arr = Array.from({ length: n }, (_, i) => i + 1);
let queue = [];
let count = 0;
for (let i = 1; i <= n; i++) {
  count = (count + k - 1) % arr.length;
  queue.push(...arr.splice(count, 1));
}
console.log(`<${queue.join(", ")}>`);