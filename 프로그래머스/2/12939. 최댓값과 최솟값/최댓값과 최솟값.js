function solution(s) {
    var answer = '';
    s = s.split(" ").map((i) => {return Number(i)}).sort((a, b) => {return a - b});
    
    return `${s[0]} ${s[s.length - 1]}`;
}