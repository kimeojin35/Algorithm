function solution(answers) {
    let n = {
        1: 0,
        2: 0,
        3: 0
    }
    let n1 = [1, 2, 3, 4, 5]
    let n2 = [2, 1, 2, 3, 2, 4, 2, 5]
    let n3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    answers.map((i, j) => {
        if (i == n1[parseInt(j % n1.length)]) n[1]++
        if (i == n2[parseInt(j % n2.length)]) n[2]++
        if (i == n3[parseInt(j % n3.length)]) n[3]++
    })
    const a = Object.entries(n).sort((a, b) => b[1] - a[1])
    const answer = a.filter(i => a[0][1] === i[1]).map(i => Number(i[0]))
    return answer
}
