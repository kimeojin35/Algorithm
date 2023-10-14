function solution(my_string, m, c) {
    let answer = '';
    const a = [];
    for (let i = 0; i < my_string.length; i += m) {
        a.push(my_string.slice(i, i + m));
    }
    for (const i of a) {
        answer += i[c - 1];
    }
    return answer;
}
