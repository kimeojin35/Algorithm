function solution(order) {
    var answer = 0;
    order.map((i) => {
        if (i.includes("americano") || i == "anything") answer += 4500;
        else answer += 5000
    })
    return answer;
}