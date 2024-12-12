const fs = require('fs')
let [num, kim, lim] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let round = 0;

const calcRound = (r) => {
  if (r % 2 == 0) {
    return r / 2;
  } else {
    return (r + 1) / 2;
  }
};

while (num > 1) {
  round += 1;
  if ((kim % 2 == 0 && kim == lim + 1) || (lim % 2 == 0 && lim == kim + 1)) {
    break;
  }
  kim = calcRound(kim);
  lim = calcRound(lim);
  if (num % 2 == 0) {
    num /= 2;
  } else {
    num = num / 2 + 1;
  }
}

console.log(round == 0 ? -1 : round);
