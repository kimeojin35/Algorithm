function solution(s) {
    var answer = '';
    return s.length % 2 == 0 ? s.slice(s.length / 2 - 1, Math.floor(s.length / 2) + 1) : s.slice(Math.floor(s.length / 2), Math.floor(s.length / 2) +1);
}