function solution(my_string) {
    var answer = [];
    answer = my_string.split("").filter((i) => i >= '0' && i <= '9').sort().map((i) => Number(i));
    return answer;
}