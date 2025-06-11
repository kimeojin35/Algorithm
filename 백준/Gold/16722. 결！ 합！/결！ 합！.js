const fs = require("fs");
const testcase = fs.readFileSync(0).toString().trim().split("\n");
const card = testcase.slice(0, 9).map((i) => i.split(" "));
const history = testcase.slice(10).map((i) => i.split(" ").slice(1).map((j) => Number(j) - 1));

const isValidSet = (a, b, c) => {
  for (let i = 0; i < 3; i++) {
    const set = new Set([a[i], b[i], c[i]]);
    if (set.size === 2) return false;
  }
  return true;
};

// 모든 3장 조합 검사
const findValidSets = (cards) => {
  const result = [];
  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        if (isValidSet(cards[i], cards[j], cards[k])) {
          result.push([i, j, k].join(" "));
        }
      }
    }
  }
  return result;
};

const sets = findValidSets(card);
const score = [];
const visited = [];

const equales = (a, b) => JSON.stringify(a) == JSON.stringify(b);
history.map((c) => {
  const comb = c.sort((a, b) => a - b).join(" ");
  if (!c.length && !score.includes(3) && equales(visited.sort(), sets)) {
    score.push(3);
  } else if (sets.includes(comb) && !visited.includes(comb)) {
    score.push(1);
    visited.push(comb);
  } else score.push(-1);
});

console.log(score.reduce((acc, a) => acc + a));