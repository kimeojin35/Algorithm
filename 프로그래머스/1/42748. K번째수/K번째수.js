function solution(array, commands) {
    var answer = [];
    commands.map(([a, b, c]) => {
        let arr = array.slice(a - 1, b).sort((a, b) => {return a - b});
        answer.push(arr[c - 1])
    })
    return answer;
}