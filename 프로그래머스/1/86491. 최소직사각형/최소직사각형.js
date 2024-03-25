function solution(sizes) {
    var answer = 0;
    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i][0] > sizes[i][1]) {
            let a = sizes[i][0]
            sizes[i][0] = sizes[i][1];
            sizes[i][1] = a;
        }
    }
    let arr = sizes.map(([a, b]) => {
        return a
    })
    let arr2 = sizes.map(([a, b]) => {
        return b
    })
    return Math.max(...arr) * Math.max(...arr2);
}