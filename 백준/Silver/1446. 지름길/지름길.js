const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, D] = input[0].split(" ").map(Number);
const shortcuts = input.slice(1).map(line => line.split(" ").map(Number));

const dist = Array(D + 1).fill(Infinity);
dist[0] = 0;

const shortcutMap = {};
for (const [start, end, length] of shortcuts) {
  if (end > D) continue;
  if (!shortcutMap[start]) shortcutMap[start] = [];
  shortcutMap[start].push({ end, length });
}

for (let i = 0; i <= D; i++) {
  if (i + 1 <= D) {
    dist[i + 1] = Math.min(dist[i + 1], dist[i] + 1);
  }

  if (shortcutMap[i]) {
    for (const { end, length } of shortcutMap[i]) {
      dist[end] = Math.min(dist[end], dist[i] + length);
    }
  }
}

console.log(dist[D]);