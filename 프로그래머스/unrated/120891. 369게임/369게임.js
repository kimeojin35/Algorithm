function solution(order) {
    let answer = 0;
    let a = String(order);
    let b = Array.from(a);
    console.log(b);
    for (let i = 0; i < b.length; i++) {
        if (b[i] % 3 == 0 && b[i] != 0) answer++;
    }
    return answer;
}