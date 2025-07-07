const fs = require('fs')
const [[n, m], ...testcase] = fs.readFileSync(0).toString().trim().split("\n").map((i) => i.split(" ").map(Number));
const ladder = testcase.slice(0, n);
const snake = testcase.slice(n);

const arr = new Array(101).fill(null);
for (let [a, b] of testcase) arr[a] = b;

const queue = [[1, 0]];
const visited = new Array(101).fill(false);
visited[1] = true;

while (queue.length) {
  const [now, count] = queue.shift();
  for (let i = 1; i <= 6; i++) {
    let next = now + i;
    if (next > 100) continue;
    if (arr[next]) next = arr[next];
    if (!visited[next]) {
      if (next === 100) {
        console.log(count + 1);
        return;
      }
      visited[next] = true;
      queue.push([next, count + 1]);
    }
  }
}