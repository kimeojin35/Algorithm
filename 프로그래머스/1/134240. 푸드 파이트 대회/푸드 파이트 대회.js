function solution(food) {
    var answer = [];
    food.map((i, j) => {
        let a = Math.floor(i / 2)
        for (let i = 0; i < a; i++) {
            answer.push(j)
        }
    })
    return answer.join("") + "0" + answer.reverse().join("");
}