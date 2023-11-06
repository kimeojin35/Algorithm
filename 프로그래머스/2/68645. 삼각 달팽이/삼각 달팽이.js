function solution(n) {
    let answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(new Array(i).fill(0));
    }
    let row = -1, col = 0;
    let num = 1;
    for (let i = n; i > 0; i -= 3) {
        for (let j = 0; j < i; j++) {
            answer[++row][col] = num++;
        }
        for (let j = 0; j < i - 1; j++) {
            answer[row][++col] = num++;
        }
        for (let j = 0; j < i - 2; j++) {
            answer[--row][--col] = num++;
        }
    }
    return answer.flat();
}