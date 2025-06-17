const fs = require('fs')
const [[m, n], ...arr] = fs.readFileSync(0).toString().trim().split("\n").map((i) => i.split(" ").map(Number));
const move = [[1, 0], [0, 1], [-1, 0], [0, -1]];

const visited = Array.from({ length: n }, () => Array(m).fill(0));
let remain = n * m;
const queue = [];
let head = 0;

arr.map((line, i) => {
  line.map((item, j) => {
    if (item == 1) {
      queue.push([i, j]);
      visited[i][j] = 1;
      remain--;
    } else if (item == -1) {
      visited[i][j] = 1;
      remain--;
    }
  });
});

let count = 0;
while (head < queue.length) {
  if (remain == 0) break;
  const len = queue.length - head;
  for (let i = 0; i < len; i++) {
    const [nx, ny] = queue[head++];
    move.map(([x, y]) => {
      const dx = nx + x;
      const dy = ny + y;
      if (dx >= 0 && dx < n && dy >= 0 && dy < m && arr[dx][dy] == 0 && visited[dx][dy] == 0) {
        visited[dx][dy] = 1;
        queue.push([dx, dy]);
        remain--;
      }
    });
  }
  count++;
}
if (remain) count = -1;
console.log(count);