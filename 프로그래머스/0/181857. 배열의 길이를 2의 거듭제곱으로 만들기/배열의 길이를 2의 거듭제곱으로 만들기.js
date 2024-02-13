function solution(arr) {
    var answer = [];
    if (arr.length != 1) {
        let a = 2;
        while(a < arr.length) {
            a *= 2;
        }
        a -= arr.length;
        arr = arr.concat(new Array(a).fill(0));
    } else {
        return arr;
    }
    return arr;
}