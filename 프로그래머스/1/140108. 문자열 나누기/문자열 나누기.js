function solution(str) {
    const s = str.split("")
    let count = 0
    let now = s[0]
    let same = 0
    let diff = 0
    for (let i = 0; i < s.length; i++) {
        if (now === s[i]) same++
        else diff++
        if (same === diff) {
            count++
            now = s[i+1]
            same = 0
            diff = 0
        }
        if (i === s.length - 1 && same !== diff) count++
    
    }
    return count
}