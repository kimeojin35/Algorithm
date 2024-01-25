function solution(array) {
    var answer = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].toString().includes("7")) {
            let a = array[i].toString().split("");
            for (let j = 0; j < a.length; j++) {
                if (a[j].includes("7")) answer++;
            }
            
        }
    }
    return answer;
}