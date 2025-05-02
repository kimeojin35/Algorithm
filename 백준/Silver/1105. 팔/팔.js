const fs = require('fs')
let [L, R] = fs.readFileSync(0).toString().trim().split(" ");

let counter = 0;
if (L.length != R.length) {
  console.log(counter);
} else {
  for (let i = 0; i < L.length; i++) {
    if (L[i] != R[i]) break;
    if (L[i] === "8") counter++;
  }
  console.log(counter);
}