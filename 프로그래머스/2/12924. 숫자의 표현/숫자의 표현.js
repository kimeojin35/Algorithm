function solution(n) {
    let answer = 0;
    
    for (let start = 1; start <= n; start++) {
        let sum = 0;
        for (let i = start; i <= n; i++) {
            sum += i;
            if (sum === n) {
                answer++;
                break;
            } else if (sum > n) {
                break;
            }
        }
    }
    
    return answer;
}