function solution(A,B){
    var answer = 0;
    A.sort((a, b) => {return a - b})
    B.sort((a, b) => {return b - a})
    A.map((i, j) => {
        answer += i * B[j]
    })
    return answer;
}