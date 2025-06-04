const fs = require('fs')
const [[n, m], ...testcase] = fs.readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));
const arr = testcase.slice(0, n - 1);
const node = testcase.slice(n - 1, n + m);
const obj = {};
arr.map(([n1, n2, d]) => {
  if (!obj[n1]) obj[n1] = {};
  if (!obj[n2]) obj[n2] = {};
  obj[n1][n2] = d;
  obj[n2][n1] = d;
});

const answer = [];
const BFS = (sn, en) => {
  const visited = new Set();
  const queue = [...Object.entries(sn)];

  while (queue.length > 0) {
    const [node, distance] = queue.shift();
    if (node == en) return distance;
    if (!visited.has(node)) {
      visited.add(node);
      obj[node];
      Object.entries(obj[node]).map(([item, d]) => {
        queue.push([item, distance + d]);
      });
    }
  }
};

node.map(([n1, n2]) => {
  answer.push(BFS(obj[n1], n2));
});

console.log(answer.join("\n"));