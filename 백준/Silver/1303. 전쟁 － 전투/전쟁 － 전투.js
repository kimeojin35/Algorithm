const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const grid = input.slice(1);
const visited = Array.from({ length: M }, () => Array(N).fill(false));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function bfs(sx, sy) {
  const color = grid[sx][sy];
  let count = 1;
  const queue = [[sx, sy]];
  visited[sx][sy] = true;

  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx >= 0 && nx < M &&
        ny >= 0 && ny < N &&
        !visited[nx][ny] &&
        grid[nx][ny] === color
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
        count++;
      }
    }
  }
  return { color, power: count * count };
}

let white = 0;
let blue = 0;

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      const { color, power } = bfs(i, j);
      if (color === "W") white += power;
      else blue += power;
    }
  }
}

console.log(white, blue);