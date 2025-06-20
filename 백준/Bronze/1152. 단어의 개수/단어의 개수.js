const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(" ");
if (input[0] == "") console.log(0);
else console.log(input.length);