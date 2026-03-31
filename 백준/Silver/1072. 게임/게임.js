const fs = require('fs');
const [X, Y] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

function minGamesToIncreaseWinRate(X, Y) {
    let Z = Math.floor((Y * 100) / X);
    if (Z >= 99) return -1; // 승률을 더 올릴 수 없는 경우

    let left = 1, right = 1e18, answer = -1; // 충분히 큰 범위 설정
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        // mid번 더 이겼을 때 승률 계산
        const newRate = Math.floor(((Y + mid) * 100) / (X + mid));
        if (newRate > Z) {
            answer = mid;
            right = mid - 1; // 최소값 찾기
        } else {
            left = mid + 1;
        }
    }
    return answer;
}

console.log(minGamesToIncreaseWinRate(X, Y));