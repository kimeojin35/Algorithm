const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const map = input.map((line) => line.split(" ").map(Number));
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const result = [];

const dfs = (x, y, Level, str) => {
  if (Level === 5) {
    result.push(str);
    return;
  } else {
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
        dfs(nx, ny, Level + 1, str + map[nx][ny]);
      }
    }
  }
};

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    dfs(i, j, 0, map[i][j].toString());
  }
}

console.log([...new Set(result)].length);