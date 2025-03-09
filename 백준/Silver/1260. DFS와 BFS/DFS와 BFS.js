const fs = require('fs');
const [num, ...testcase] = fs.readFileSync(0).toString().trim().split("\n");
const [n, m, v] = num.trim().split(" ").map(Number);

let arr = {};
testcase.forEach((i) => {
  const [a, b] = i.trim().split(" ").map(Number);
  (arr[a] ||= []).push(b);
  (arr[b] ||= []).push(a);
});
Object.values(arr).forEach((v) => v.sort((a, b) => a - b));

const dfs = (arr, v) => {
  const visited = [];
  const stack = [v];
  while (stack.length > 0) {
    const node = stack.pop();
    if (!visited.includes(node)) {
      visited.push(node);
      // arr[node]가 정의되어 있으면 역순으로 스택에 추가
      if (arr[node]) stack.push(...arr[node].reverse());
    }
  }
  return visited.join(" ");
};

const bfs = (arr, v) => {
  const visited = [];
  const queue = [v];
  while (queue.length > 0) {
    const node = queue.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      // arr[node]가 정의되어 있으면 역순으로 큐에 추가
      if (arr[node]) queue.push(...arr[node].reverse());
    }
  }
  return visited.join(" ");
};

console.log(dfs(arr, v));  // DFS 출력
console.log(bfs(arr, v));  // BFS 출력