const fs = require('fs')
const [num, ...testcase] = fs.readFileSync(0).toString().trim().split("\n");
const [n, r, q] = num.split(" ").map(Number);
const links = testcase
  .slice(0, n - 1)
  .map((line) => line.split(" ").map(Number));
const queries = testcase.slice(n - 1).map(Number);

const graph = Array.from({ length: n + 1 }, () => []);
links.map(([u, v]) => {
  graph[u].push(v);
  graph[v].push(u);
});

const subtreeSize = Array(n + 1).fill(0);
const visited = Array(n + 1).fill(false);

const dfs = (node) => {
  visited[node] = true;
  subtreeSize[node] = 1;
  graph[node].map((i) => {
    if (!visited[i]) {
      dfs(i);
      subtreeSize[node] += subtreeSize[i];
    }
  });
};

dfs(r);

queries.map((i) => console.log(subtreeSize[i]));