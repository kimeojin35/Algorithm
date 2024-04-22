function solution(numbers) {
    let a = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    a.forEach((i, j) => {
        const a = new RegExp(i, 'gi');
        numbers = numbers.replace(a, j);
    });
    return Number(numbers);
}