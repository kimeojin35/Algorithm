function solution(strArr) {
    let arr = new Array(30).fill(0);
    strArr.map((i) => arr[i.length - 1]++);
    return Math.max.apply(null, arr);
}