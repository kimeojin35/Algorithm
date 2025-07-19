const fs = require("fs");
const [num, ...testcase] = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = num.split(" ").map(Number);
const arr = testcase.map((i) => i.split(""));
const move = [[1, 0],[0, 1],[-1, 0],[0, -1]];

let start;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (arr[i][j] === "I") {
      start = [i, j];
      break;
    }
  }
}

let visited = Array.from({ length: n }, () => Array(m).fill(false));
visited[start[0]][start[1]] = true;

const queue = [start];
let head = 0;
let count = 0;

while (head < queue.length) {
  const [x, y] = queue[head++];

  if (arr[x][y] === "P") count++;

  for (const [dx, dy] of move) {
    const nx = x + dx;
    const ny = y + dy;

    if (
      nx >= 0 && nx < n &&
      ny >= 0 && ny < m &&
      !visited[nx][ny] &&
      arr[nx][ny] !== "X"
    ) {
      visited[nx][ny] = true;
      queue.push([nx, ny]);
    }
  }
}

console.log(count === 0 ? "TT" : count);