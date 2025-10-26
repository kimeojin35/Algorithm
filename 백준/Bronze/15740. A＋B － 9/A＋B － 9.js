const fs = require('fs')
const [a, b] = fs.readFileSync(0).toString().split(' ')
console.log((BigInt(a) + BigInt(b)).toString())