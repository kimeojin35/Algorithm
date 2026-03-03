const fs = require("fs");
const n = Number(fs.readFileSync(0));
let sum = 99;
if (n < 100) {
  sum = n;
} else {
  for (let i = 100; i <= n; i++) {
    const str = i.toString().split("");
    let isHansu = true;
    const han = str[0] - str[1];
    for (let j = 0; j < str.length - 1; j++) {
      if (str[j] - str[j + 1] !== han) {
        isHansu = false;
        break;
      }
    }
    if (isHansu) sum++;
  }
}

console.log(sum);