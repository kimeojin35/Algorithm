function solution(n, left, right) {
    var answer = [];
    for(var i=left; i<=right; i++)
        answer.push(Math.max(Number.parseInt(i / n), i % n) + 1);
    return answer;
}