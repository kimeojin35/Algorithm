const fs = require('fs')
const n = Number(fs.readFileSync(0).toString())
const answer = []
const decreaseNum = (num, lastDigit) => {
    answer.push(num)
    for (let next = 0; next < lastDigit; next++) {
        decreaseNum(num * 10 + next, next)
    }
}

for (let i = 0; i <= 9; i++) {
    decreaseNum(i, i)
}

answer.sort((a, b) => a - b)
if (n > answer.length) console.log(-1)
else console.log(answer[n - 1])