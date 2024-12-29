const fs = require('fs')
const [n, arr, k] = fs.readFileSync(0).toString().trim().split("\n"); // 구조 분해 할당
const num = Number(n);
const key = Number(k);
const seq = arr.split(" ").map(Number);

let keyArr = Array.from({ length: 8 }, (_, i) => i); // 키 목록

seq.map((s) => {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (2 ** i + 2 ** j === s && i < j) {
        const p1 = keyArr.indexOf(i);
        const p2 = keyArr.indexOf(j);
        let temp = keyArr[p1];
        keyArr[p1] = keyArr[p2];
        keyArr[p2] = temp;
        break;
      }
    }
  }
});

console.log(keyArr.indexOf(key));