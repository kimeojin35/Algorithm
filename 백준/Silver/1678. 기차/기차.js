const fs = require('fs')
const [set, ...arr] = fs.readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" "));
const [test, m, n] = set.map(Number);
const nameArr = [];
const timeArr = [];
arr.map(([name, ...time]) => {
  nameArr.push(name);
  timeArr.push(time.slice(0, time.length - 1).map(Number));
});

// 출발 시간 합치기
let t = timeArr
  .reduce((acc, i) => {
    return [...acc, ...i];
  })
  .sort((a, b) => a - b);
for (let i = 0; i < t.length - 1; i++) {
  if (t[i] < m && t[i + 1] >= m) {
    t = [...t.slice(i + 1, t.length), ...t.slice(0, i + 1)];
    break;
  }
}

// 마지막 출발 기차 시간
let trainNum = 0;
const lastTrainTime = t[(n % t.length) - 1 < 0 ? t.length - 1 : (n % t.length) - 1];
timeArr.map((i, idx) => {
  if (i.includes(lastTrainTime)) {
    trainNum = nameArr[idx];
    return;
  }
});

console.log(trainNum);