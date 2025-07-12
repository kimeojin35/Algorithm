const fs = require('fs')
const [[n, m], ...arr] = fs.readFileSync(0).toString().trim().split("\n").map((i) => i.split(" ").map(Number));
let s = [];
let answer = Array.from({ length: n }, () => Array(m).fill(-1));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (arr[i][j] == 2) s = [i, j];
    if (arr[i][j] == 0) answer[i][j] = 0;
  }
}
const move = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let count = 1;
answer[s[0]][s[1]] = 0;
let queue = [s];
let visited = Array.from({ length: n }, () => Array(m).fill(false));
visited[s[0]][s[1]] = true;

while (queue.length) {
  const len = queue.length;
  for (let i = 0; i < len; i++) {
    const [nx, ny] = queue.shift();
    move.map(([x, y]) => {
      const dx = nx + x;
      const dy = ny + y;
      if (
        dx >= 0 &&
        dx < n &&
        dy >= 0 &&
        dy < m &&
        !visited[dx][dy] &&
        arr[dx][dy] == 1
      ) {
        queue.push([dx, dy]);
        visited[dx][dy] = true;
        answer[dx][dy] = count;
      }
    });
  }
  count++;
}
console.log(answer.map((i) => i.join(" ")).join("\n"));