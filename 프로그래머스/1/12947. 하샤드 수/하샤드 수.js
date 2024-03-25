function solution(x) {
    let a = 0;
    let arr = String(x).split("").map((i) => a += Number(i));
    return x % a == 0 ? true : false
}