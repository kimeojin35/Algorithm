function solution(strings, n) {
    return strings.sort((i, j) => {
        let x = i.charAt(n);
        let y = j.charAt(n);
        if (x === y) {
            return i.localeCompare(j);
        }
        return x.localeCompare(y); 
    });
}