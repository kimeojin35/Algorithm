function solution(my_string) {
    var answer = 0;
    let num;
    let j = 1;
    let i = 0;
    while (i < my_string.length) {
        if (!isNaN(my_string[i])) {
            num = my_string[i];
            console.log(my_string[i], num)
            while (!isNaN(my_string[i + j])) {
                
                num += my_string[i + j]
                j++;
            }
            answer += parseInt(num);
        }
        i += j;
        j = 1;
    }
    return answer;
}