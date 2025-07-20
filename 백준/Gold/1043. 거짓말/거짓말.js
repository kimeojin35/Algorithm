const fs = require("fs");
const [[n, m], [_, ...truth], ...testcase] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const party = testcase.map((arr) => arr.slice(1));
let knownTruth = new Set(truth);

let changed = true;
while (changed) {
  changed = false;
  for (const p of party) {
    if (p.some((person) => knownTruth.has(person))) {
      let beforeSize = knownTruth.size;
      p.forEach((person) => knownTruth.add(person));
      if (knownTruth.size > beforeSize) changed = true;
    }
  }
}

let count = 0;
for (const p of party) {
  if (p.every((person) => !knownTruth.has(person))) count++;
}

console.log(count);