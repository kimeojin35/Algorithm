function solution(my_strings, parts) {
    let answer = [];
    for (let i = 0; i < my_strings.length; i++) {
        const [s, e] = parts[i];
        const partString = my_strings[i].substring(s, e + 1);
        answer += partString;
    }
    return answer;
}