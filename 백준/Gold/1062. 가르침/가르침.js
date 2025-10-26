const fs = require('fs');
const [first, ...rest] = fs.readFileSync(0, 'utf8').trim().split('\n');
const [n, k] = first.split(' ').map(Number);
const words = rest.map(w => w.slice(4, -4)); // anta / tica 제거

const mustKnow = ['a', 'n', 't', 'i', 'c'];

if (k < 5) {
  console.log(0);
  process.exit();
}
if (k === 26) {
  console.log(n);
  process.exit();
}

let answer = 0;

// 남은 21개 알파벳 후보
const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i))
  .filter(c => !mustKnow.includes(c));

const learned = new Set(mustKnow);

// 모든 단어를 현재 learned로 읽을 수 있는 단어 수 계산
function countReadable() {
  let cnt = 0;
  for (const word of words) {
    if ([...word].every(ch => learned.has(ch))) cnt++;
  }
  return cnt;
}

// DFS로 조합 탐색
function dfs(idx, depth) {
  if (depth === k - 5) {
    answer = Math.max(answer, countReadable());
    return;
  }
  for (let i = idx; i < alphabet.length; i++) {
    learned.add(alphabet[i]);
    dfs(i + 1, depth + 1);
    learned.delete(alphabet[i]);
  }
}

dfs(0, 0);
console.log(answer);