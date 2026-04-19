const fs = require('fs')
const input = Number(fs.readFileSync(0).toString().trim())
let arr = []

for (let i = 1; i < (1 << 10); i++) {
    let num = ""
    for (let j = 9; j >= 0; j--) {
        if (i & (1 << j)) num += j
    }
    arr.push(Number(num))
}

arr.sort((a, b) => a - b)

console.log(input > 1022 ? -1 : arr[input])