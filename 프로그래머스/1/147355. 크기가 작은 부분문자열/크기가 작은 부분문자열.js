function solution(t, p) {
    var answer = 0;
    t = t.split("");
    for (let i = 0; i < t.length - p.length + 1; i++) {
        let a = t.slice(i, i + p.length).join("");
        if (Number(a) <= Number(p)) answer++;
    }
    return answer;
}