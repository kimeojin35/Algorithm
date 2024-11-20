const fs = require('fs');
const str = fs.readFileSync(0).toString().trim().split("");
let word = null;

for (let i = 1; i < str.length - 1; i++) {
  for (let j = i + 1; j < str.length; j++) {
    // 각 부분 나누기
    const first = str.slice(0, i).reverse();
    const second = str.slice(i, j).reverse();
    const third = str.slice(j).reverse();

    // 새로운 단어 생성
    const newWord = first.concat(second, third).join("");

    // 최솟값 갱신
    if (newWord < word || word === null) {
      word = newWord;
    }
  }
}

console.log(word);