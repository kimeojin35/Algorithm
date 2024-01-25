function solution(quiz) {
    var answer = [];
    for (let i = 0; i < quiz.length; i++) {
        let a = quiz[i].split(" = ");
        if (eval(a[0]) == a[1]) {
            answer.push("O");
        } else {
            answer.push("X");
        }
    }
    return answer;
}