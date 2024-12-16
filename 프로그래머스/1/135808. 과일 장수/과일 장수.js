function solution(k, m, score) {
    let answer = 0;
    let x = 0, y = m;
    const sortScore = [...score].sort((a, b) => b - a)
    for (let i = 0; i < Math.floor(score.length / m); i++) {
        const arr = sortScore.slice(x, y)
        x += m
        y += m
        const min = Math.min(...arr)
        answer += (min * m)
    }
    return answer;
}