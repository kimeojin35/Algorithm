function solution(s) {
    let answer = [];
    s.split("").map((i, j) => {
        let arr = s.slice(0, j);
        let a = arr.lastIndexOf(i);
        if (a != -1) answer.push(j - a);
        else answer.push(a);
    })
    return answer;
}