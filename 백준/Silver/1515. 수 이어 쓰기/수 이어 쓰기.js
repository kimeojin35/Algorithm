const fs = require('fs')
let input = fs.readFileSync(0).toString().trim();

let n = 0;
let idx = 0;

while (true) {
  n += 1;
  for (const s of String(n)) {
    if (input[idx] === s) {
      idx += 1;
      if (idx >= input.length) {
        console.log(n);
        process.exit();
      }
    }
  }
}
