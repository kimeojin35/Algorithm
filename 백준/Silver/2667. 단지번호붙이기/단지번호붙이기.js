const fs = require('fs')
const [num, ...testcase] = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(num);
const arr = testcase.map((i) => i.split(""));
let visited = Array.from({ length: n }, () => Array(n).fill(false));

const dfs = (x, y) => {
  if (x < 0 || y < 0 || x >= n || y >= n) return 0;
  if (arr[x][y] == "0" || visited[x][y]) return 0;
  visited[x][y] = true;
  let size = 1;
  size += dfs(x + 1, y);
  size += dfs(x - 1, y);
  size += dfs(x, y + 1);
  size += dfs(x, y - 1);
  return size;
};

let answer = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] == "1" && !visited[i][j]) {
      const size = dfs(i, j);
      answer.push(size);
    }
  }
}

console.log(answer.length + "\n" + answer.sort((a, b) => a - b).join("\n"));