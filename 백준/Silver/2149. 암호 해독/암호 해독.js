const fs = require('fs')
const [key, str] = fs.readFileSync(0).toString().trim().split("\n");
const keyLength = key.length;
const strLength = str.length;
const arr = Array.from({ length: Math.ceil(strLength / keyLength) + 1 }, () =>
  Array(keyLength)
);
const keyArr = Array.from(key);
const ori = Array.from(key);

let idx = 0;
for (let j = 0; j < keyLength; j++) {
  for (let i = 1; i <= Math.floor(strLength / keyLength); i++) {
    arr[i][j] = str.charAt(idx++);
  }
}

keyArr.sort();
for (let i = 0; i < keyLength; i++) {
  arr[0][i] = keyArr[i];
}

const visited = Array(keyLength).fill(false);
let result = "";

for (let j = 1; j < arr.length; j++) {
  for (let k = 0; k < keyLength; k++) {
    for (let i = 0; i < keyLength; i++) {
      if (!visited[i] && ori[k] === arr[0][i]) {
        visited[i] = true;
        result += arr[j][i];
        break;
      }
    }
  }
  visited.fill(false);
}

console.log(result);
