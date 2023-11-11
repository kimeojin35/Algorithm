function solution(emergency) {
    var answer = [];
    for (let i = 1; i <= emergency.length; i++) {
        let a = emergency.indexOf(Math.max.apply(null, emergency));
        emergency[a] = 0;
        answer[a] = i;
    }
    return answer;
}