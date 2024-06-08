function solution(s) {
    var answer = 0;
    s = s.split("")
    s.forEach((i, j) => {
        let a = s.shift();
        s.push(a);
        var list = { "(" : ")", "{" : "}", "[" : "]" }
        var verify = s.reduce((ac, cv) => {
            if (cv === list[ac[ac.length - 1]]) ac.pop()
            else ac.push(cv)
            return ac;
        }, []);
        if (verify.length === 0) answer++;
    })
    
    return answer;
}