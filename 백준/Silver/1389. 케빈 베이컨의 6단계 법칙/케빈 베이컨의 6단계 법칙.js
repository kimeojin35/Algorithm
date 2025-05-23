const fs = require('fs')
const [[n, m], ...arr] = fs.readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));
const r = Object.fromEntries(Array.from({ length: n }, (_, i) => [i + 1, []]));
for (let i = 0; i < m; i++) {
  r[arr[i][0]].push(arr[i][1]);
  r[arr[i][1]].push(arr[i][0]);
}

let answer = 0;
let sum = Infinity;

const dfs = (num) => {
  let visited = new Array(n).fill(0);
  let count = 1;
  r[num].map((i) => (visited[i - 1] = count));
  let queue = [...r[num]];
  while (queue.length) {
    count++;
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const shift = queue.shift();
      r[shift].map((j) => {
        if (visited[j - 1] == 0 && j !== num) {
          visited[j - 1] = count;
          queue.push(j);
        }
      });
    }
  }
  return visited.reduce((acc, a) => acc + a);
};

for (let i = 1; i <= n; i++) {
  const a = dfs(i);
  if (a < sum) {
    sum = a;
    answer = i;
  }
}

console.log(answer);