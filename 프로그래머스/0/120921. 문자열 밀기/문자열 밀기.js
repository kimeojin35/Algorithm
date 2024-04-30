function solution(A, B) {
    if (A == B) return 0;
    A = A.split("")
    for (let i = 0; i < A.length; i++) {
        let str = A.pop();
        A.unshift(str);
        if (A.join("") == B) return i + 1;
    }
    return -1;
}