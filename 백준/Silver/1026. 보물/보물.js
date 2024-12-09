const fs = require('fs');
let [num, arrA, arrB] = fs.readFileSync(0).toString().trim().split("\n");
num = Number(num);
arrA = arrA
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
arrB = arrB
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

let answer = 0;
arrB.map((n, i) => {
  let sum = n * arrA[i];
  answer += sum;
});
console.log(answer);
