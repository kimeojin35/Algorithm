function solution(left, right) {
    let answer = 0;
    for (left; left <= right; left++) {
        let i = 1, c = 0;
        while(i <= left) {
            if (left % i == 0) c++;
            i++;
        }
        if (c % 2 == 0) answer += left;
        else answer -= left
    }
    return answer;
}