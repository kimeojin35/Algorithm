const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let t = Number(input[0]);
let idx = 1;

while (t--) {
  const [k, n] = input[idx++].split(" ").map(Number);
  const a = [];

  while (a.length < n) {
    a.push(...input[idx++].split(" ").map(Number));
  }

  a.unshift(2e9); // a[0] = 2e9
  let h = 0;
  let i = 0;

  for (; i < n; i++) {
    let m = 0;
    for (let j = n; j >= 1; j--) {
      if (a[j] < a[m]) {
        m = j;
      } else if (a[j] === a[m]) {
        if (j > h) m = j;
      }
    }
    if (m < h) break;
    h = m;
    a[m] = 2e9;
  }

  console.log(`${k} ${n - i}`);
}