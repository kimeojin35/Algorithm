function solution(number, k) {
    let arr = [];
    for (let i = 0; i < number.length; i++) {
        while (arr.length > 0 && arr[arr.length - 1] < number[i] && k > 0) {
        k--;
        arr.pop();
    }
        arr.push(number[i]);
    }
    arr.splice(number.length - k, k);
    return arr.join("");
}