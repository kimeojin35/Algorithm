function solution(num_list, n) {
    let answer = [];
    for (let i = 0, l = 0; i < num_list.length / n; i++) {
        answer[i] = [];
        for (let j = 0; j < n; j++, l++) {
            if (l < num_list.length) {
                answer[i][j] = num_list[l];
            }
        }
    }
    return answer;
}