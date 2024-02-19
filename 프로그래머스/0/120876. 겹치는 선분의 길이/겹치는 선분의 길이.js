function solution(lines) {
    let answer = 0;
    let n = new Array(201).fill(0);
    lines.map(([a, b]) => {
        for (a; a < b; a++) {
            n[a + 100]++;
        }
    })
    n.map((i) => {
        if (i > 1) answer++;
    })
    return answer;
}