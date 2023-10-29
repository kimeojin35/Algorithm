function solution(my_string) {
    let a1 = new Set(my_string);
    return [...a1].join("");
}