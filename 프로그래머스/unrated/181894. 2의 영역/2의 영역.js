function solution(arr) {
    let start = arr.indexOf(2);
    let last = arr.lastIndexOf(2);
    return arr.indexOf(2) == -1 ? [-1] : arr.slice(start, last + 1);
}