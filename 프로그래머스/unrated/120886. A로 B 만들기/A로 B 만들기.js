function solution(before, after) {
    var answer = 0;
    before = before.split("").sort();
    after = after.split("").sort();
    
    for (let i = 0; i < before.length; i++) {
        if (before[i] != after[i]) {
            return 0;
        }
    }
    return 1;
}