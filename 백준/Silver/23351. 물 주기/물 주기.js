const fs = require('fs')

const [n, k, a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let arr = new Array(n).fill(null).map((_) => k);

// 물주기 사이클
let cycle = [];
for (let i = 0; i < Math.floor(n / a); i++)
  cycle.push(new Array(a).fill(null).map((_, j) => j + i * a));

if (n % a > 0)
  cycle.push(new Array(a).fill(null).map((_, i) => i + (n % a) + a)); // 만약 화분 갯수가 a로 나눴을 때 딱 떨어지지 않는다면

let cycleNum = 0;
for (let day = 1; Math.min(...arr) > 0; day++) {
  for (let i = 0; i < a; i++) {
    arr[cycle[cycleNum][i]] += b;
  }
  arr.map((_, i) => (arr[i] -= 1));
  cycleNum = (cycleNum + 1) % cycle.length;
  if (Math.min(...arr) == 0) {
    console.log(day);
    break;
  }
}
