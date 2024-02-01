function solution(my_string) {
    var answer = [];
    let a = [];
    my_string = my_string.split("").reverse().map((i) => {
        a.unshift(i);
        answer.push(a.join(""));
    })
    return answer.sort();
}