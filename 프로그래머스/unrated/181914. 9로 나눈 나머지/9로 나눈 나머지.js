function solution(number) {
    number.split("");
    let answer = 0;
    console.log(number)
    for (let i = 0; i < number.length; i++) {
        answer += parseInt(number[i]);
    }
    return answer % 9;
}