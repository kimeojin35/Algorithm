function solution(my_str, n) {
    var answer = [];
    let a = my_str.split("");
    while(Math.ceil(a.length / n)) {
        let b = a.splice(0, n).join("");
        answer.push(b);
    }
    return answer;
}