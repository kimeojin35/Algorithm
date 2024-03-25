function solution(a, b) {
    let answer = 0;
    let arr = [a, b].sort((a, b) => {return a - b})
    for (arr[0]; arr[0] <= arr[1]; arr[0]++) {
        answer += arr[0];
    }
    return answer;
}