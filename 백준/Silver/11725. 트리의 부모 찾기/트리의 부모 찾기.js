const fs = require('fs')
const [num, ...testcase] = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(num);
const arr = testcase.map((i) => i.split(" ").map((j) => j - 1));

let bfsArr = Array.from({ length: n }, () => []);
arr.map(([a, b]) => {
  bfsArr[a].push(b);
  bfsArr[b].push(a);
});

let visited = new Array(n).fill(false);
let root = new Array(n).fill(null);

let queue = [0];
visited[0] = true;
while (queue.length > 0) {
  let current = queue.shift();
  bfsArr[current].map((i) => {
    if (!visited[i]) {
      visited[i] = true;
      root[i] = current;
      queue.push(i);
    }
  });
}

console.log(root.slice(1).map((i) => i + 1).join("\n"));