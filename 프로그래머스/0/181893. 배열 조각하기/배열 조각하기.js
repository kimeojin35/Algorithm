function solution(arr, query) {
    query.map((i, j) => j % 2 == 0 ? arr.splice(i + 1, arr.length) : arr.splice(0, i));
    return arr;
}