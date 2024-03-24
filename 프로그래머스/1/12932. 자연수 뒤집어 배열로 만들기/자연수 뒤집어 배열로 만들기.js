function solution(n) {
    n = String(n).split("").reverse()
    let answer = n.map((i) => {
        return Number(i)
    })
    return answer;
}