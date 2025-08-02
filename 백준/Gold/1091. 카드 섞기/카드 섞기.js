const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = Number(input[0]);
const P = input[1].split(" ").map(Number);
const S = input[2].split(" ").map(Number);

// 현재 카드의 위치 상태 (처음은 0~N-1 순서)
let card = Array.from({ length: N }, (_, i) => i);
const original = [...card];

let count = 0;

// 현재 카드 상태가 플레이어 P에게 제대로 배정되었는지 확인
const isGoal = () => {
  for (let i = 0; i < N; i++) {
    if (P[card[i]] !== i % 3) return false;
  }
  return true;
};

// 목표 상태면 바로 종료
if (isGoal()) {
  console.log(0);
  return;
}

while (true) {
  count++;

  // 카드 섞기 (S[i] 위치로 이동)
  const newCard = Array(N);
  for (let i = 0; i < N; i++) {
    newCard[S[i]] = card[i];
  }
  card = newCard;

  if (isGoal()) {
    console.log(count);
    break;
  }

  // 원래 상태로 돌아왔으면 -1
  if (card.every((v, i) => v === original[i])) {
    console.log(-1);
    break;
  }
}