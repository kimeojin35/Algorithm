const fs = require('fs')
const [num, ...testcase] = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < Number(num); i++) {
  const [n, m] = testcase[i * 2].split(" ").map(Number);
  let arr = testcase[i * 2 + 1].split(" ").map((item, idx) => {
    return {
      level: Number(item),
      seq: idx,
    };
  });

  let count = 0;
  for (let j = 0; j < n; j++) {
    const maxArr = arr.map((item) => item.level);
    const max = maxArr.indexOf(Math.max(...maxArr));
    arr = [...arr.slice(max, n), ...arr.slice(0, max)];
    if (arr[0].level >= arr[max].level) {
      const now = arr.shift();
      count++;
      if (now.seq == m) break;
    }
  }
  console.log(count);
}
