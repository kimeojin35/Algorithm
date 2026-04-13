const fs = require('fs')
const [num, input] = fs.readFileSync(0).toString().trim().split("\n")
const [n, newP, p] = num.split(" ").map(Number)
const arr = (input ?? "-1").split(" ").map(Number)

if (n === p && arr[n - 1] >= newP) console.log(-1)
else {
    let rank = 1
    for (let i = 0; i < n; i++) {
        if (arr[i] > newP) rank++
        else break
    }
    console.log(rank)
}