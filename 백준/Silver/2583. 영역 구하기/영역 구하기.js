const fs = require('fs')
const [[m, n, k], ...arr] = fs.readFileSync(0).toString().trim().split("\n").map((i) => i.split(" ").map(Number));

let visited = Array.from({ length: m }, () => Array(n).fill(0));
arr.forEach(([x1, y1, x2, y2]) => {
  for (let i = y1; i < y2; i++) {
    for (let j = x1; j < x2; j++) {
      visited[i][j] = 1;
    }
  }
});

const move = [[0, 1],[1, 0],[0, -1],[-1, 0],];
const size = [];

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (visited[i][j] === 0) {
      let queue = [[i, j]];
      visited[i][j] = 1;
      let area = 1;

      while (queue.length) {
        const [x, y] = queue.shift();
        for (const [dx, dy] of move) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx >= 0 && nx < m && ny >= 0 && ny < n && visited[nx][ny] === 0) {
            visited[nx][ny] = 1;
            queue.push([nx, ny]);
            area++;
          }
        }
      }

      size.push(area);
    }
  }
}

console.log(`${size.length}\n${size.sort((a, b) => a - b).join(" ")}`);