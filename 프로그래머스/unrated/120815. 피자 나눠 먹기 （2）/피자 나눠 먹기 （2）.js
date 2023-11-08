function solution(n) {
    let i = 6;
    while (1) {
        if (i % n == 0) {
            return i / 6;
        }
        i += 6;
    }
}