const fs = require('fs')
const [num, ...testcase] = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(num);
const arr = testcase.map((i) => i.trim().split(" ").map(Number));
let queue = [];
for (let i = 0; i < arr.length; i++) {
  const [a, ...item] = arr[i];
  if (a == 0) {
    const max = queue.indexOf(Math.max(...queue));
    console.log(queue.length > 0 ? queue[max] : -1);
    queue.splice(max, 1);
  } else queue.push(...item);
}