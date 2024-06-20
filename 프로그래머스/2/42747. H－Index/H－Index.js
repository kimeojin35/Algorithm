function solution(citations) {
    var answer = 0;
    let arr = [];

    citations.sort((a,b) => {return b-a}).map((i) => {
        arr.push(i);
        if(i < arr.length){
            return;
        }
        answer++;
    })

    return answer;
}