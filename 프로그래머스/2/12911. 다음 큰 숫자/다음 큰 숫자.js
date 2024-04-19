function solution(n) {
    var answer = 0;
    let b;
    let a = n.toString(2).split("0").join("").split("").length;
    for (let i = n + 1; a !== b; i++) {
        b = i.toString(2).split("0").join("").split("").length;
        if (a === b) return i;
    }
}