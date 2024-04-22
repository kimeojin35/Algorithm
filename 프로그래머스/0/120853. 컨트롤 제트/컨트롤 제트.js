function solution(s) {
    var answer = 0;
    s = s.split(" ");
    s.map((i, j) => {
        if (i == "Z") {
            answer -= Number(s[j - 1])
        } else {
            answer += Number(i)
        }
    })
    return answer;
}