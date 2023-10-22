function solution(rsp) {
    var answer = '';
    rsp.split("").map((i)=> i == '5' ? answer += '2' : i == '2' ? answer += '0' : answer += '5');
    return answer;
}