const fs = require('fs')
const [num, ...testcase] = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = num.split(" ").map(Number);
const guide = testcase.slice(0, n);
const quiz = testcase.slice(n);

const nameToNum = new Map();
guide.forEach((name, i) => nameToNum.set(name, i + 1));

const answer = quiz.map((q) => {
  if (isNaN(Number(q))) {
    return nameToNum.get(q); // O(1)
  } else {
    return guide[Number(q) - 1]; // O(1)
  }
});

console.log(answer.join("\n"));