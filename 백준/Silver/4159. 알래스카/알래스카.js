const fs = require('fs')
const arr = fs.readFileSync(0).toString().trim().split("\n").map(Number);
arr.pop();
const testcase = [];
for (let i = 0; i < arr.length; i++) {
  if (arr.length === 0) break;
  testcase.push(arr.splice(0, arr[0] + 1));
}

const isPossible = (station) => {
  const between = [];
  for (let i = 0; i < station.length - 1; i++) {
    if (station[i + 1] - station[i] > 200) return false;
    between.push(station[i + 1] - station[i]);
  }
  if (1422 - station[station.length - 1] > 100) return false;
  return true;
};

testcase.map((item) => {
  const [n, ...station] = item;
  console.log(
    isPossible(station.sort((a, b) => a - b)) ? "POSSIBLE" : "IMPOSSIBLE"
  );
});