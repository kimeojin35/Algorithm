function solution(k, t) {
    let arr = [];
    let answer = [];
    let num = 0;
    t.map((i, j) => {
        if (arr[i]) arr[i]++;
        else arr[i] = 1;
    })
    arr = arr.sort((a, b) => {
        return b - a
    });
    for (let i = 0; i < arr.length; i++) {
        if (num < k) {
            num += arr[i];
            answer.push(i);
        }
    }
    return answer.length;
}