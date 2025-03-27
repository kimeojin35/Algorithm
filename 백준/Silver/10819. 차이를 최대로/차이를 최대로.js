const fs = require('fs')
const [num, testcase] = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(num);
let arr = testcase
  .trim()
  .split(" ")
  .map((i) => Number(i.trim()))
  .sort((a, b) => a - b);


const check = new Array(n).fill(false);
const newArr = [];
let max = 0;

function cal(arr) {
  let sum = 0;
  for (let i = 0; i < n - 1; i++) {
    sum += Math.abs(arr[i] - arr[i + 1]);
  }
  return sum;
}

function dfs(depth) {
  for (let i = 0; i < n; i++) {
    if (depth === n) {
      max = Math.max(max, cal(newArr));
    }

    if (!check[i]) {
      check[i] = true;
      newArr.push(arr[i]);
      dfs(depth + 1);
      check[i] = false;
      newArr.pop();
    }
  }
}

dfs(0);
console.log(max);
