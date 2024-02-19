function solution(n) {
    let answer = 1;
    let i;
    for (i = 1; answer <= n; i++) {
        if (answer > n) return i - 2;
        answer *= i;
    }
    return i - 2;
}