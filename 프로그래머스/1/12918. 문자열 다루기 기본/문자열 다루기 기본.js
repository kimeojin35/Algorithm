function solution(s) {
    return s.replace(/\d/g,'').length === 0 && (s.length === 4 || s.length === 6)
}