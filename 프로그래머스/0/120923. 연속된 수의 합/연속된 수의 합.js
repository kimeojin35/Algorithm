function solution(n, total) {
    var answer = [];
    let start = (total - n * (1 + n) / 2) / n;
    for(let i = 0; i<n; i++)  answer[i] = start + i + 1;
    return answer;
}