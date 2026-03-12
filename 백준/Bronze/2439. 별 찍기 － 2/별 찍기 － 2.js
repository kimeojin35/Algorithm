const fs = require('fs')
const n = Number(fs.readFileSync(0))
let answer = []
for (let i = 1; i <= n; i++) {
    answer.push(' '.repeat(n - i) + '*'.repeat(i))
}
console.log(answer.join('\n'))