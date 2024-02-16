function solution(sides) {
    let count = 0
    const max = Math.max(...sides)
    const min = Math.min(...sides)
    for(let i = max-min+1 ; i <= max ; i ++) {
        count++
    }
    for(let i = max+1 ; i < max+min ; i ++) {
        count++
    }
    return count
}