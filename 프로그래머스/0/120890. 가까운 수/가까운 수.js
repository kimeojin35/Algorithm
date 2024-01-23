function solution(array, n) {
    var a = 1000;
    array.sort(function(a, b) {return a - b;})
    var answer;

    for (let i = 0; i < array.length; i++) {
        let b = Math.abs(n - array[i]);
        if (a > b) {
            a = b;
            answer = array[i];
        }
    }

    return answer;
}
