function solution(arr, divisor) {
    return arr.filter((i) => i % divisor == 0).length != 0 ? arr.filter((i) => i % divisor == 0).sort((a, b) => {return a - b}) : [-1];
}