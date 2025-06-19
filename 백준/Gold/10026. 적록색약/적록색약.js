const fs = require('fs')
const [num, ...testcase] = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(num);
const arr = testcase.map((line) => line.split(""));

const move = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

const arr2 = arr.map((row) => row.map((cell) => (cell === "G" ? "R" : cell)));

const countAreas = (array) => {
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  let areaCount = 0;

  const dfs = (x, y, color) => {
    visited[x][y] = true;

    for (const [dx, dy] of move) {
      const nx = x + dx;
      const ny = y + dy;
      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < n &&
        !visited[nx][ny] &&
        array[nx][ny] === color
      ) {
        dfs(nx, ny, color);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) {
        dfs(i, j, array[i][j]);
        areaCount++;
      }
    }
  }

  return areaCount;
};

const normal = countAreas(arr);
const colorWeak = countAreas(arr2);

console.log(normal, colorWeak);