const fs = require('fs')
const n = Number(fs.readFileSync(0).toString());

const generatePattern = (n) => {
  if (n === 1) return ["*"];
  const prev = generatePattern(n / 3);
  const result = [];
  for (let i = 0; i < 3; i++) {
    for (const line of prev) {
      let row = "";
      for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) row += " ".repeat(line.length);
        else row += line;
      }
      result.push(row);
    }
  }
  return result;
};

const pattern = generatePattern(n);
console.log(pattern.join("\n"));