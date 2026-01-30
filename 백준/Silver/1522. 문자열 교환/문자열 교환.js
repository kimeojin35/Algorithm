const fs = require('fs')
const s = fs.readFileSync(0).toString().trim()
const n = s.length

const countA = [...s].filter(c => c === 'a').length
if (countA === 0) {
  console.log(0)
  return
}

const doubled = s + s

let bCount = 0
for (let i = 0; i < countA; i++) {
  if (doubled[i] === 'b') bCount++
}

let answer = bCount

for (let i = countA; i < doubled.length; i++) {
  if (doubled[i] === 'b') bCount++
  if (doubled[i - countA] === 'b') bCount--
  answer = Math.min(answer, bCount)
}

console.log(answer)