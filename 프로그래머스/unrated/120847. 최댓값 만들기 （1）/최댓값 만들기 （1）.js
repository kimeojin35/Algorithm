function solution(numbers) {
    numbers.sort(function(a, b) {return a - b;});
    return numbers[numbers.length - 1] * numbers[numbers.length - 2];
}