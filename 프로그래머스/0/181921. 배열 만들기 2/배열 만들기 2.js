function solution(l, r) {
    var answer = [];
    for (l; l <= r; l++) {
        if (/^[05]+$/.test(l.toString())) {
            answer.push(l);
        }
    }
    if (!answer.length) return [-1];
    return answer;
}