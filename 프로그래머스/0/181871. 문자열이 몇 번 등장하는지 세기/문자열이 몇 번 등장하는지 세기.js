function solution(myString, pat) {
    var answer = 0;
    let a;
    while(1) {
        a = myString.indexOf(pat);
        if (a == -1) break;
        myString = myString.slice(a + 1);
        answer++;
    }
    return answer;
}