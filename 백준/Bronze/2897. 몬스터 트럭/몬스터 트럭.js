const fs = require('fs')
const [num, ...input] = fs.readFileSync(0).toString().trim().split("\n");
const [r, c] = num.split(" ").map(Number);

let answer = new Array(5).fill(0);
const dir = [
  [0, 0],
  [1, 0],
  [0, 1],
  [1, 1],
];

for (let i = 0; i < r - 1; i++) {
  for (let j = 0; j < c - 1; j++) {
    let count = 0;
    let isBuilding = true;
    for (let [x, y] of dir) {
      if (input[i + x][j + y] == "#") {
        isBuilding = false;
        break;
      }
      if (input[i + x][j + y] == "X") count += 1;
    }
    if (isBuilding) answer[count] += 1;
  }
}

console.log(answer.join("\n"));