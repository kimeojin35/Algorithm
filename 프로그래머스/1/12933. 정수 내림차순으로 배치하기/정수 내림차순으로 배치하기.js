function solution(n) {
    n = String(n).split("").sort().reverse()
    return Number(n.join(""));
}