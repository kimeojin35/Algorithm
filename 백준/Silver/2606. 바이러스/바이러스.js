const fs = require('fs')

const [num, pairs, ...arr] = fs.readFileSync(0).toString().trim().split("\n");
const relationArr = new Array(Number(num) + 1).fill(null).map(() => []);
const link = arr
  .map((i) => i.split(" ").map(Number))
  .map(([a, b]) => {
    relationArr[a].push(b);
    relationArr[b].push(a);
  });

const visited = [];
const queue = [1];

while (queue.length > 0) {
  const node = queue.shift();

  if (!visited.includes(node)) {
    visited.push(node);
    queue.push(...relationArr[node]);
  }
}

console.log(visited.length - 1);