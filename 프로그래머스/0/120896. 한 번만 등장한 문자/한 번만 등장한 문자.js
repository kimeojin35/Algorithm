function solution(s) {
    let answer = [];
    for (let i = 0; i < s.length; i++) {
        let a = s.split(s[i]).length - 1;
        console.log(a);
        if (a === 1) {
            answer.push(s[i]);
        }
    }
    return answer.sort().join("");
}