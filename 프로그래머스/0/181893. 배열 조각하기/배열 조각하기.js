function solution(arr, query) {
    query.map((i, j) => {
        console.log(arr);
        j % 2 == 0 ? arr.splice(i + 1, arr.length) : arr.splice(0, i);
    console.log(arr)});
    return arr;
}