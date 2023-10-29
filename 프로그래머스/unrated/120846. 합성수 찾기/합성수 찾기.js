function solution(n) {
    var answer = 0;
    for (let i = 1; i <= n; i++) {
        let num = 0;
        for (let j = 1; j <= n; j++) {
            if (i % j == 0) num++;
        }
        if (num >= 3) {
            answer++;
        }
    }
    return answer;
}