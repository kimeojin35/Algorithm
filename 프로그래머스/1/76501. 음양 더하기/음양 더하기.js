function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (!signs[i]) absolutes[i] *= -1
    }
    for (let i = 0; i < absolutes.length; i++) {
        answer += absolutes[i]
    }
    console.log(absolutes)
    return answer;
}