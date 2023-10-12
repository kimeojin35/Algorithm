function solution(my_string, s, e) {
    let a1 = my_string.slice(0, s);
    let a2 = my_string.slice(s, e + 1).split("").reverse().join("");
    let a3 = my_string.slice(e + 1, my_string.length);
    return a1.concat(a2, a3);
}