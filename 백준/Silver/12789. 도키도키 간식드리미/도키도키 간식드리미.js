const fs = require('fs')
const [num, testcase] = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(num);
let arr = testcase.split(" ").map(Number);
let sub = [];
let answer = true;
let count = 1;

while (arr.length > 0) {
  if (arr[0] === count) {
    arr.shift();
    count++;
  } else if (sub[0] === count) {
    sub.shift();
    count++;
  } else {
    sub.unshift(arr.shift());
  }
}

while (sub.length > 0) {
  if (sub[0] === count) {
    sub.shift();
    count++;
  } else {
    answer = false;
    break;
  }
}

console.log(answer ? "Nice" : "Sad");