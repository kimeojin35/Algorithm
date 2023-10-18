function solution(myStr) {
    var answer = [];
    myStr = myStr.replace(/[abc]/g, ' ');
    answer = myStr.split(" ").filter((i) => i != "");
    if (answer == '') {
        return ["EMPTY"]
    } else {
        return answer;
    }
}