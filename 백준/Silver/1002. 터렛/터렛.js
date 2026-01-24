const fs = require("fs");
const [t, ...arr] = fs.readFileSync(0).toString().trim().split("\n");
const answer = [];
arr.map((testcase) => {
  const [x1, y1, r1, x2, y2, r2] = testcase.split(" ").map(Number);
  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  if (x1 === x2 && y1 === y2) {
    if (r1 === r2) answer.push(-1);
    else answer.push(0);
  } else {
    if (Math.abs(r1 - r2) < distance && distance < r1 + r2) answer.push(2);
    else if (distance > r1 + r2) answer.push(0);
    else if (distance == r1 + r2) answer.push(1);
    else if (distance === Math.abs(r1 - r2)) answer.push(1);
    else answer.push(0);
  }
});
console.log(answer.join("\n"));