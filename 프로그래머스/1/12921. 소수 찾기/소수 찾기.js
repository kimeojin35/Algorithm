function solution(n) {
    const arr = new Array(n + 1).fill(1)
    let answer = n - 1;
    
    for (let i=2; i<Math.sqrt(n); i++) {
        if (arr[i]) {
            for (let j=i**2; j<=n; j+=i) {
                if (arr[j]) answer--, arr[j]=0;
            }
        }
    }
    return answer;
}
