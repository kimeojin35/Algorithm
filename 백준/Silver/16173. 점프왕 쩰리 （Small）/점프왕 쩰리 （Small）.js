const fs = require('fs')
const [num, ...map] = fs.readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));
const n = Number(num);

let answer = "Hing"; // 끝점에 도달할 수 없으면 Hing 출력
let visited = Array.from({ length: n }, () => Array(n).fill(false)); // 각 구역을 방문했는지 체크하는 배열
const queue = [[0, 0]]; // 탐색할 경로 배열
visited[0][0] = true; // 시작 구역 방문 체크

while (queue.length) {
  const [x, y] = queue.shift(); // 탐색할 경로 뽑기
  const step = map[x][y]; // 현재 위치
  if (step == -1) {
    // 승리 지점에 도달했다면
    answer = "HaruHaru"; // HaruHaru 출력
    break;
  }
  for (const [dx, dy] of [[step, 0],[0, step]]) {
    // for of는 안써봐서 해석하자면
    // [[step, 0], [0, step]] 2차원 배열을 돌면서 값을 [dx, dy]로 구조분해할당해오는 거
    const nx = x + dx; // 현재 위치에서 아래로 갔을 때 좌표값
    const ny = y + dy; // 현재 위치에서 오른쪽으로 갔을 때 좌표값

    if (nx < n && ny < n && !visited[nx][ny]) {
      // 좌표값이 맵을 안 벗어나고, 그 구역에 방문한 적 없다면
      visited[nx][ny] = true; // 방문 체크
      queue.push([nx, ny]); // 아래, 오른쪽 경로 추가
    }
  }
}
console.log(answer);
