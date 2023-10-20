function solution(n) {
    var answer = 0;
    n = String(n).split('').map((i) => answer += Number(i));
    return answer;
}