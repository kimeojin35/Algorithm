const input = require("fs");
const [[n], [m], ...testcase] = input
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));
const edges = testcase.slice(0, m);
const [[start, end]] = testcase.slice(-1);

// 그래프 만들기
const graph = Array.from({ length: n + 1 }, () => []);
edges.forEach(([from, to, cost]) => {
  graph[from].push([to, cost]);
});

// 다익스트라 함수
const dijkstra = (start) => {
  const visited = Array(n + 1).fill(false);
  const dist = Array(n + 1).fill(Infinity);
  dist[start] = 0;

  for (let i = 1; i <= n; i++) {
    let minCost = Infinity;
    let minNode = -1;

    for (let j = 1; j <= n; j++) {
      if (!visited[j] && dist[j] < minCost) {
        minCost = dist[j];
        minNode = j;
      }
    }
    if (minNode === -1) break;
    visited[minNode] = true;
    graph[minNode].forEach(([next, cost]) => {
      if (dist[next] > dist[minNode] + cost) {
        dist[next] = dist[minNode] + cost;
      }
    });
  }
  return dist;
};
const result = dijkstra(start);
console.log(result[end]);