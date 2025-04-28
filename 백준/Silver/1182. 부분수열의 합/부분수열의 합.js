const fs = require('fs')
const [num, testcase] = fs.readFileSync(0).toString().trim().split("\n");
const [n, s] = num.split(" ").map(Number);
const arr = testcase.split(" ").map(Number);

let count = 0;

function dfs(index, sum, selectedCount) {
  if (index === n) {
    if (sum === s && selectedCount > 0) count++;
    return;
  }
  dfs(index + 1, sum + arr[index], selectedCount + 1);
  dfs(index + 1, sum, selectedCount);
}

dfs(0, 0, 0);

console.log(count);
