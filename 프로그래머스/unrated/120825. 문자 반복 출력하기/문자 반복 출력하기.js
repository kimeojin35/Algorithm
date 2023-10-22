function solution(my_string, n) {
    var answer = [];
    my_string.split("");
    for (let i = 0; i < my_string.length; i++) {
        answer.push(my_string[i].repeat(n));
    }
    return answer.join("");
}