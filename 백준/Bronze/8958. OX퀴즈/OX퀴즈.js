const fs = require('fs')
const [n, ...testcase] = fs.readFileSync(0).toString().trim().split("\n");

const calc = (num) => {
  let sum = 0;
  for (let i = num; i >= 1; i--) sum += i;
  return sum;
};

let answer = "";
testcase.map((arr) => {
  let sum = 0;
  arr.split("X").map((i) => (sum += calc(i.length)));
  answer += `${sum}\n`;
});
console.log(answer);