const fs = require('fs')

const [[m, n, h], ...rest] = fs.readFileSync(0).toString().trim().split("\n").map((line) => line.split(" ").map(Number));

const arr = [];
for (let i = 0; i < h; i++) {
  const floor = [];
  for (let j = 0; j < n; j++) {
    floor.push(rest[i * n + j]);
  }
  arr.push(floor);
}

const visited = Array.from({ length: h }, () =>
  Array.from({ length: n }, () => Array(m).fill(0))
);
let remain = 0;
const queue = [];
let head = 0;

const dz = [1, -1, 0, 0, 0, 0];
const dx = [0, 0, -1, 1, 0, 0];
const dy = [0, 0, 0, 0, -1, 1];

for (let z = 0; z < h; z++) {
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (arr[z][x][y] === 1) {
        visited[z][x][y] = 1;
        queue.push([z, x, y]);
      } else if (arr[z][x][y] === -1) {
        visited[z][x][y] = 1;
      } else {
        remain++;
      }
    }
  }
}

let count = 0;

while (head < queue.length) {
  if (remain === 0) break;
  const len = queue.length - head;
  for (let i = 0; i < len; i++) {
    const [z, x, y] = queue[head++];
    for (let d = 0; d < 6; d++) {
      const nz = z + dz[d];
      const nx = x + dx[d];
      const ny = y + dy[d];
      if (nz >= 0 &&nz < h &&nx >= 0 &&nx < n &&ny >= 0 &&ny < m &&arr[nz][nx][ny] === 0 &&visited[nz][nx][ny] === 0) {
        visited[nz][nx][ny] = 1;
        queue.push([nz, nx, ny]);
        remain--;
      }
    }
  }
  count++;
}

if (remain > 0) count = -1;
console.log(count);