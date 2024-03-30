function solution(a, b) {
    return (a.map((cur,i) => cur * b[i])).reduce((a,b) => a + b);
}