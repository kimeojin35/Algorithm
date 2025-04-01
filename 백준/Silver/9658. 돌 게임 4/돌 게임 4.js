const fs = require('fs')
const n = Number(fs.readFileSync(0).toString());
if (n % 7 == 1 || n % 7 == 3) console.log("CY");
else console.log("SK");