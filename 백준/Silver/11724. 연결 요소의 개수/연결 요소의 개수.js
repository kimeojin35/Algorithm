const fs = require('fs')
const [[n, m], ...testcase] = fs.readFileSync(0).toString().trim().split("\n").map((i) => i.split(" ").map(Number));

const graph = {};
for (let i = 1; i <= n; i++) graph[i] = [];
testcase.map(([u, v]) => {
  graph[u].push(v);
  graph[v].push(u);
});

let visited = new Array(n + 1).fill(false);
let count = 0;
let idx = 1;
const dfs = (node) => {
  visited[node] = true;
  for (let next of graph[node]) {
    if (!visited[next]) dfs(next);
  }
};

for (let i = 1; i <= Number(n); i++) {
  if (!visited[i]) {
    dfs(i);
    count++;
  }
}
console.log(count);