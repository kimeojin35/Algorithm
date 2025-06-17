const fs = require('fs')
const [[m, n], ...arr] = fs.readFileSync(0).toString().trim().split("\n").map((i) => i.split(" ").map(Number));
const move = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

const visited = Array.from({ length: n }, () => Array(m).fill(0));
let remain = n * m;

const queue = [];
let head = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (arr[i][j] === 1) {
      queue.push([i, j]);
      visited[i][j] = 1;
      remain--;
    } else if (arr[i][j] === -1) {
      visited[i][j] = 1;
      remain--;
    }
  }
}

let count = 0;
while (head < queue.length) {
  if (remain === 0) break;

  const len = queue.length - head;
  for (let i = 0; i < len; i++) {
    const [x, y] = queue[head++];

    for (const [dx, dy] of move) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        arr[nx][ny] === 0 &&
        visited[nx][ny] === 0
      ) {
        visited[nx][ny] = 1;
        queue.push([nx, ny]);
        remain--;
      }
    }
  }
  count++;
}

if (remain > 0) count = -1;
console.log(count);
