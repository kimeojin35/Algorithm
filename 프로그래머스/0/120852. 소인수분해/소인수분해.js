function solution(n) {
    let answer = [];
    let i = 2;
    while (i <= n) {
        if (n % i == 0) {
            answer.push(i);
            console.log("push", i)
            while (n % i == 0) {n /= i; console.log(n)}
            i++;
        }
        else i++;
    }
    return answer;
}