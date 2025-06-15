const fs = require('fs')
const [[c, p], arr] = fs.readFileSync(0).toString().trim().split("\n").map((i) => i.split(" ").map(Number));
const block = [
  [[0], [0, 0, 0, 0]],
  [[0, 0]],
  [[0, 0, 1],[1, 0],],
  [[1, 0, 0],[0, 1],],
  [[0, 0, 0],[0, 1],[1, 0, 1],[1, 0],],
  [[0, 0, 0],[0, 0],[0, 1, 1],[2, 0],],
  [[0, 0, 0],[0, 2],[1, 1, 0],[0, 0],],
]; // 0, 90, 180, 270도로 돌렸을 때 블럭이 지면과 떨어있는 정도

let count = 0;
block[p - 1].map((rotate, idx) => {
  // [0, 0, 0], [0, 1], [1, 0, 1], [1, 0]
  for (let i = 0; i <= c - rotate.length; i++) {
    // i번째에 블록을 놓을 수 있는지
    let isRotate = true; // 블록을 떨어뜨릴 수 있는지
    let base = arr[i] - rotate[0];
    for (let j = 0; j < rotate.length; j++) {
      // j개의 열로 이루어진 블록
      if (base + rotate[j] !== arr[i + j]) {
        isRotate = false;
        break;
      }
    }
    if (isRotate) count++;
  }
});
console.log(count);