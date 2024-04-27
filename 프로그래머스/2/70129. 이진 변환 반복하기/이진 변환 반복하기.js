function solution(s) {
    let i = 0, j = 0;
    for (i; s.toString(2) != "1"; i++) {
        let str = s.split("0").length - 1
        s = s.replace(/0/g, '');
        s = s.length.toString(2)
        j += str
    }
    return [i, j];
}