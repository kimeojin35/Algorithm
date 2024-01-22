function solution(n)
{
    let answer = 0;
    n = n.toString().split("");
    for (let i in n) {
        answer += parseInt(n[i]);
    }
    return answer;
}