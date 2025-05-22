const fs=  require('fs')
const [num, ...arr] = fs.readFileSync(0).toString().toString().split("\n");

for (let i = 0; i < Number(num); i++) {
  const n = Number(arr[i * 3]);
  const [nowX, nowY] = arr[i * 3 + 1].split(" ").map(Number);
  const [moveX, moveY] = arr[i * 3 + 2].split(" ").map(Number);
  let board = Array.from({ length: n }, () => Array(n).fill(false));

  const move = [
    [1, 2],
    [2, 1],
    [-1, 2],
    [2, -1],
    [1, -2],
    [-2, 1],
    [-1, -2],
    [-2, -1],
  ];

  const bfs = () => {
    const queue = [[nowX, nowY, 0]];
    while (queue.length) {
      const [dx, dy, m] = queue.shift();
      if (dx == moveX && dy == moveY) return m;
      for (let i = 0; i < 8; i++) {
        const nx = dx + move[i][0];
        const ny = dy + move[i][1];
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && !board[nx][ny]) {
          board[nx][ny] = true;
          queue.push([nx, ny, m + 1]);
        }
      }
    }
  };

  console.log(bfs());
}