const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = Number(input[0]);

const words = [];
for (let i = 1; i <= N; i++) {
  words.push({
    word: input[i],
    index: i - 1,
  });
}

// 사전순 정렬
words.sort((a, b) => a.word.localeCompare(b.word));

function getLCP(a, b) {
  let len = Math.min(a.length, b.length);
  let i = 0;
  while (i < len && a[i] === b[i]) i++;
  return i;
}

let maxLCP = 0;
let lcpArr = [];

// 인접 LCP 계산
for (let i = 0; i < N - 1; i++) {
  const lcp = getLCP(words[i].word, words[i + 1].word);
  lcpArr.push(lcp);
  maxLCP = Math.max(maxLCP, lcp);
}

// 최대 LCP가 0이면
// 가장 먼저 등장한 두 단어 출력
if (maxLCP === 0) {
  console.log(input[1]);
  console.log(input[2]);
  process.exit(0);
}

let answer = null;

for (let i = 0; i < N - 1; ) {
  if (lcpArr[i] === maxLCP) {
    let start = i;
    let end = i;

    // 같은 LCP 구간 확장
    while (end < N - 1 && lcpArr[end] === maxLCP) {
      end++;
    }

    // start ~ end 까지의 단어들 모음
    const candidates = words.slice(start, end + 1);

    // 입력 순서 정렬
    candidates.sort((a, b) => a.index - b.index);

    const pair = [candidates[0], candidates[1]];

    if (
      !answer ||
      pair[0].index < answer[0].index ||
      (pair[0].index === answer[0].index &&
        pair[1].index < answer[1].index)
    ) {
      answer = pair;
    }

    i = end;
  } else {
    i++;
  }
}

console.log(answer[0].word);
console.log(answer[1].word);
