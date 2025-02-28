const fs = require('fs')
const [num, arr] = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(num);
const candybrand = arr.split(" ").map(Number);

const brandCount = {};
candybrand.forEach((brand) => {
  if (!brandCount[brand]) brandCount[brand] = 1;
  else brandCount[brand]++;
});
let answer = 0;
for (let k = 1; k <= Math.max(...candybrand); k++) {
  let valid = true;
  let waysToChoose = 1;
  for (let i = 1; i <= k; i++) {
    if (brandCount[i]) waysToChoose *= brandCount[i];
    else {
      valid = false;
      break;
    }
  }

  if (valid) answer += waysToChoose;
}

console.log(answer);