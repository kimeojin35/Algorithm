function solution(picture, k) {
    let answer = [];
    picture.map((i) => {
        let a = i.split("").map((j) => {return j.repeat(k)});
        for (let i = 0; i < k; i++) {answer.push(a.join(""))};
    })
    return answer;
}