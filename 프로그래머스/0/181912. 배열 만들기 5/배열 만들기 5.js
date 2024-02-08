function solution(intStrs, k, s, l) {
    return intStrs.map((i) => parseInt(i.slice(s,s+l))).filter((i) => k < i)
}