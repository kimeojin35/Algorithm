const fs = require('fs')
const [num, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
const [k, d, n] = num.split(" ")
let doll = [d[0].charCodeAt(), Number(d[1])]
let king =  [k[0].charCodeAt(), Number(k[1])]
const move = {
    R: [0, 1],
    L: [0, -1],
    B: [-1, 0],
    T: [1, 0],
    RT: [1,1],
    LT: [1,-1],
    RB: [-1, 1],
    LB: [-1,-1]
}
for (let i = 0; i < n; i++) {
    const more = move[arr[i]]
    const king2 = [king[0] + more[1], king[1] + more[0]]
    if (king2[0] < 65 || king2[0] > 72 || king2[1] < 1 || king2[1] > 8) continue
    if (king2[0] === doll[0] && king2[1] === doll[1]) {
        const doll2 = [doll[0] + more[1], doll[1] + more[0]]
        if (doll2[0] < 65 || doll2[0] > 72 || doll2[1] < 1 || doll2[1] > 8) continue
        doll = doll2
    }
    king = king2
}
console.log([String.fromCharCode(king[0]), king[1]].join("") + "\n" + [String.fromCharCode(doll[0]), doll[1]].join(""))