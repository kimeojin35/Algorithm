const fs = require('fs')
const input = fs.readFileSync(0).toString().trim();
let answer = "";
for (let i = 97; i <= 122; i++) answer += `${input.indexOf(String.fromCharCode(i))} `;
console.log(answer);
