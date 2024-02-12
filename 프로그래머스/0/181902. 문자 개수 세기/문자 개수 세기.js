function solution(my_string) {
    var answer = [];
    let a = new Array(52).fill(0);
    my_string.split("").map((i) => {
        if (Math.sign(i.charCodeAt(0) - 97) != -1) {
            a[i.charCodeAt(0) - 71]++;
        } else {
            a[i.charCodeAt(0) - 65]++;
        }
    })
    return a;
}