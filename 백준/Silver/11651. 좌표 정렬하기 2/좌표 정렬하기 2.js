const fs = require('fs')
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n').map(i => i.split(" ").map(Number))
console.log(arr.sort((a, b) => a[1] - b[1] || a[0] - b[0]).map(i => i.join(" ")).join("\n"))