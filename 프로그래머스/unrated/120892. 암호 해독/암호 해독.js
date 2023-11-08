function solution(cipher, code) {
    let ca = cipher.split("")   
    let answer = '';
    for (let i = code - 1; i < ca.length; i += code) {
        answer += ca[i];
    }
    return answer;
}