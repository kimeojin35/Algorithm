const fs = require('fs');
const [n, ...wordList] = fs.readFileSync(0).toString().trim().split("\n");

let num = 0;
wordList.map((word, index) => {
  let arr = new Array(26).fill(0);
  let list = true;
  word.split("").map((_, i) => {
    let prevW = 0; // 이전 알파벳
    if (i > 0) prevW = word.charCodeAt(i - 1) - 97;

    let w = word.charCodeAt(i) - 97;
    if (prevW === w || arr[w] === 0) arr[w] += 1;
    else list = false;
  });
  if (list) num += 1;
});

console.log(num);
