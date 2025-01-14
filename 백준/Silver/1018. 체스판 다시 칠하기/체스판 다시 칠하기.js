const fs = require('fs')
const [size, ...chessboard] = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = size.split(" ").map(Number);

let answer = n * m;

for (let i = 0; i < n - 7; i++) {
  for (let j = 0; j < m - 7; j++) {
    let paint = [0, 0]; // 첫번째는 W, 두번째는 B로 시작했을 때 올바르지 않은 체스 칸 갯수
    chessboard.slice(i, i + 8).map((s, idx) => // 행 자르기
      s
        .slice(j, j + 8) // 열 자르고 분리
        .split("")
        .map((square, index) => {
          const isEven = (num) => num % 2 === 0; // 숫자가 짝수인지 구분
          if (square !== (isEven(idx) === isEven(index) ? "W" : "B"))
            paint[0]++;
          if (square !== (isEven(idx) !== isEven(index) ? "W" : "B"))
            paint[1]++;
        })
    );
    if (answer > Math.min(...paint)) answer = Math.min(...paint);
  }
}

console.log(answer);
