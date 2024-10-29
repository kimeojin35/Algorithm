const fs = require('fs');
const num = Number(fs.readFileSync(0));

let diagonal = 1;
let sumOfDiagonals = 0;

while (sumOfDiagonals + diagonal < num) {
  sumOfDiagonals += diagonal;
  diagonal++;
}

const offset = num - sumOfDiagonals;

let numerator, denominator;
if (diagonal % 2 === 0) {
  numerator = offset;
  denominator = diagonal - offset + 1;
} else {
  numerator = diagonal - offset + 1;
  denominator = offset;
}

console.log(`${numerator}/${denominator}`)