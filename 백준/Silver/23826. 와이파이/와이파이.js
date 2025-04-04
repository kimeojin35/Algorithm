const fs = require('fs')
const [num, studyroom, ...testcase] = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(num);
const [rx, ry, wifi] = studyroom.split(" ").map(Number);
const arr = testcase.map((i) => i.split(" ").map(Number));

let max = 0;
let sum = new Array(n).fill(0);
arr.map(([x, y, e], i) => {
  arr.map(([x2, y2, e2], idx) => {
    if (i !== idx)
      sum[i] += Math.max(0, e2 - (Math.abs(x2 - x) + Math.abs(y2 - y)));
  });
  const public = Math.max(0, wifi - (Math.abs(rx - x) + Math.abs(ry - y)));
  if (public - e - sum[i] > max) max = public - e - sum[i];
});

console.log(max == 0 ? "IMPOSSIBLE" : max);
