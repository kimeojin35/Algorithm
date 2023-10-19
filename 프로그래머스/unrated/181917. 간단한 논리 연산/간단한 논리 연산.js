function solution(x1, x2, x3, x4) {
    let answer, a1, a2;
    x1 == true || x2 == true ? a1 = true : a1 = false;
    x3 == true || x4 == true ? a2 = true : a2 = false;
    a1 == true && a2 == true ? answer = true : answer = false;
    return answer;
}