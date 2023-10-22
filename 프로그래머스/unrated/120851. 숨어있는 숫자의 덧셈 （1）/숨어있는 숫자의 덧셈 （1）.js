function solution(my_string) {
    var answer = 0;
    my_string.split("").map((i) => isNaN(i) ? '' : answer += Number(i));
    return answer;
}