function solution(numbers) {
    var answer = [];
    numbers.map((i, j) => {
        numbers.map((x, y) => {
            if (!answer.includes(i + x) && y !== j) {
                answer.push(i + x);
            }
        })
    })
    return answer.sort((a, b) => {return a -b});
}