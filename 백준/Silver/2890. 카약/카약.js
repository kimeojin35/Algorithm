const fs = require('fs')
const [num, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
const [r, c] = num.split(' ').map(Number)
let answer = Array.from({ length: 9 }, (_, i) => [i + 1, 0, 0])
for (let i = 0; i < r; i++) {
  const line = arr[i].split('').slice(1, -1)
  let count = 0;
  for (let j = line.length - 1; j >= 0; j--) {
    if (line[j] !== '.') {
      answer[Number(line[j]) - 1][1] = count
      break
    } else count++
  }
}
answer = answer.sort((a, b) => a[1] - b[1])
let rank = 1;
answer[0][2] = rank
for (let i = 1; i < 9; i++) {
  if (answer[i - 1][1] !== answer[i][1]) rank++
  answer[i][2] = rank
}
console.log(answer.sort((a, b) => a[0] - b[0]).map(i => i[2]).join('\n'))