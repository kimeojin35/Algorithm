function solution(arr, intervals) {
    var answer = [];
    intervals.map(([a, b], i) => {
        let j = arr.slice(a, b + 1);
        answer.push(j);
    })
    return answer.reduce((a, b) => {return a.concat(b)});
}