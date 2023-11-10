function solution(my_string) {
    var answer = [];
    answer = my_string.split("").filter((i) => i >= '0' && i <= '9');
    return Number(answer);
}