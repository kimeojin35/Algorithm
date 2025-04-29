const fs = require("fs");
const [num, ...testcase] = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = num.split(" ").map(Number);
const arr = testcase.map((i) => i.split("").map(Number));
let count = 1;
let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];

const visited = Array.from({ length: n }, () => Array(m).fill(false));
let queue = [[0, 0]];
visited[0][0] = true;

while (queue.length) {
  let [x, y] = queue.shift();
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
      if (!visited[nx][ny] && arr[nx][ny] === 1) {
        visited[nx][ny] = true;
        arr[nx][ny] = arr[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
}

console.log(arr[n - 1][m - 1]);