function solution(n) {
    var answer = [];
    for (let i = 0; i < n; i++) {
        let arr = new Array(n).fill(0);
        arr[i] = 1;
        answer.push(arr);
    }
    return answer;
}