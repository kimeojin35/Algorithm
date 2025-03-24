const fs = require('fs')
const [t, ...testcase] = fs.readFileSync(0).toString().trim().split("\n");
let count = 0;

for (let i = 0; i < Number(t); i++) {
  const [m, n, k] = testcase
    .slice(count, count + 1)[0]
    .split(" ")
    .map(Number);
  const test = testcase
    .slice(count + 1, count + k + 1)
    .map((i) => i.split(" ").map(Number));
  let arr = Array.from({ length: n }, () => new Array(m).fill(0));
  test.map(([x, y]) => {
    arr[y][x] = 1;
  });
  console.log(extractClusters(arr).length);
  count += k + 1;
}

function extractClusters(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  const clusters = [];

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function bfs(startX, startY) {
    const queue = [[startX, startY]];
    const cluster = [[startX, startY]];
    visited[startX][startY] = true;

    while (queue.length > 0) {
      const [x, y] = queue.shift();

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < rows &&
          ny < cols &&
          grid[nx][ny] === 1 &&
          !visited[nx][ny]
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
          cluster.push([nx, ny]);
        }
      }
    }

    return cluster;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        clusters.push(bfs(i, j));
      }
    }
  }

  return clusters;
}
