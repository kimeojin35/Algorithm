function solution(n,a,b) {
    let answer = 1;

    while (Math.pow(2, answer) < n) {
        if (Math.abs(a-b) == 1 && Math.min(a, b) % 2 == 1) {
            break;
        }
        
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        
        ++answer;
    }
    
    return answer;
}
출처: https://kis6473.tistory.com/160 [집가고싶다:티스토리]