const fs = require('fs')
const [n, a, m, b] = fs.readFileSync(0).toString().trim().split("\n");
const arrA = a.split(" ").map(Number).sort((a, b) => a - b)
const arrB = b.split(" ").map(Number)
let answer  = ''
const binarySearch = (t) => {
    let s = 0
    let e = Number(n) - 1
    let m = parseInt((s + e) / 2)
    while (s <= e) {
        m = parseInt((s + e) / 2)
        if (t === arrA[m]) return 1
        else if (t < arrA[m]) e = m - 1
        else s = m + 1
    }
    return 0
}
arrB.map(t => answer += `${binarySearch(t)}\n`)
console.log(answer)