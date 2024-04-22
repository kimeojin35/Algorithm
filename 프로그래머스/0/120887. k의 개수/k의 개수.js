function solution(i, j, k) {
    var answer = 0;
    for (i; i <= j; i++) {
        for (let a = 0; a < String(i).length; a++) {
            let b = String(i).split("")
            if (String(b[a]).includes(String(k))) answer++;
        }
    }
    return answer;
}