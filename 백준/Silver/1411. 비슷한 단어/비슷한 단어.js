const fs = require('fs')
const [num, ...arr] = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(num);
let count = [];
arr.map((word, i) => {
  arr.map((word2, j) => {
    if (i !== j) {
      let obj = {};
      word.split("").map((s, i) => {
        if (!obj[s] && !Object.values(obj).includes(word2[i]))
          obj[s] = word2[i];
      });
      let str = word
        .split("")
        .map((i) => obj[i])
        .join("");
      let includesStr = [word, word2].sort().join(" ");
      if (str === word2 && !count.includes(includesStr))
        count.push(includesStr);
    }
  });
});

console.log(count.length);