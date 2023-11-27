function solution(numbers, direction) {
    if (direction == "right") {
        let right = numbers[numbers.length - 1];
        numbers.unshift(right);
        numbers.pop();
    } else {
        let left = numbers[0];
        numbers.shift();
        numbers.push(left);
    }
    return numbers;
}