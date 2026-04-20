const fs = require('fs')
const [[n, m], a, b] = fs.readFileSync(0).toString().trim().split("\n").map(i => i.split(" ").map(Number))

const setA = new Set(a)
const setB = new Set(b)

let count = 0

for (let x of setA) {
  if (!setB.has(x)) count++
}

for (let x of setB) {
  if (!setA.has(x)) count++
}

console.log(count)