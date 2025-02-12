const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);
const questions = input.slice(1).map((line) => {
  const [num, s, b] = line.split(" ").map(Number);
  return { num: num.toString(), strike: s, ball: b };
});

// 가능한 3자리 수 만들기 (1~9까지의 서로 다른 숫자)
const candidates = [];
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    for (let k = 1; k <= 9; k++) {
      if (i !== j && j !== k && i !== k) {
        candidates.push(`${i}${j}${k}`);
      }
    }
  }
}

// 스트라이크와 볼 개수 판별 함수
function getStrikeBall(target, guess) {
  let strike = 0,
    ball = 0;
  for (let i = 0; i < 3; i++) {
    if (target[i] === guess[i]) {
      strike++;
    } else if (target.includes(guess[i])) {
      ball++;
    }
  }
  return { strike, ball };
}

// 모든 질문을 만족하는 후보 찾기
let validCount = 0;

for (const candidate of candidates) {
  let isValid = true;

  for (const { num, strike, ball } of questions) {
    const { strike: s, ball: b } = getStrikeBall(candidate, num);
    if (s !== strike || b !== ball) {
      isValid = false;
      break;
    }
  }

  if (isValid) validCount++;
}

console.log(validCount);
