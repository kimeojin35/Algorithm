function solution(myStr) {
    var answer = [];
    answer = myStr.replace(/[abc]/g, ' ').split(" ").filter((i) => i != "");
    if (answer == '') {
        return ["EMPTY"]
    } else {
        return answer;
    }
}