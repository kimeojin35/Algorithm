const fs = require('fs')
const [num, ...testcase] = fs.readFileSync(0).toString().trim().split("\n");
const [r, c, k] = num.split(" ").map(Number);
const arr = testcase.map((i) => i.split(""));

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
let count = 0;
const visited = Array.from({ length: r }, () => Array(c).fill(false));

const dfs = (x, y, d) => {
  if (x == 0 && y == c - 1) {
    if (d == k) count++;
    return;
  }

  directions.map(([dx, dy]) => {
    const nx = x + dx;
    const ny = y + dy;

    if (
      nx >= 0 &&
      nx < r &&
      ny >= 0 &&
      ny < c &&
      !visited[nx][ny] &&
      arr[nx][ny] != "T"
    ) {
      visited[nx][ny] = true;
      dfs(nx, ny, d + 1);
      visited[nx][ny] = false;
    }
  });
};

visited[r - 1][0] = true; // 시작점 방문 체크
dfs(r - 1, 0, 1);

console.log(count);
