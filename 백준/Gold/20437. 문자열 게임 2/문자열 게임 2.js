const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let idx = 0
const T = Number(input[idx++])
let result = []

for (let t = 0; t < T; t++) {
  const W = input[idx++].trim()
  const K = Number(input[idx++])
  
  // 문자별 위치 저장
  const pos = Array.from({ length: 26 }, () => [])
  
  for (let i = 0; i < W.length; i++) {
    const c = W.charCodeAt(i) - 97
    pos[c].push(i)
  }

  let minLen = Infinity
  let maxLen = -Infinity

  for (let c = 0; c < 26; c++) {
    if (pos[c].length < K) continue

    for (let i = 0; i <= pos[c].length - K; i++) {
      const len = pos[c][i + K - 1] - pos[c][i] + 1
      minLen = Math.min(minLen, len)
      maxLen = Math.max(maxLen, len)
    }
  }

  if (minLen === Infinity) {
    result.push('-1')
  } else {
    result.push(`${minLen} ${maxLen}`)
  }
}

console.log(result.join('\n'))