function solution(n, arr1, arr2) {
    let answer = [];
    arr1.map((i,j) => {
        let num = i.toString(2).padStart(n, '0').split("");
        let num2 = arr2[j].toString(2).padStart(n, '0').split("");
        num.map((i, j) => {
            if (i == "1" || num2[j] == "1") num[j] = "#"
            else num[j] = " "
        })
        answer.push(num.join(""))
    })
    return answer;
}