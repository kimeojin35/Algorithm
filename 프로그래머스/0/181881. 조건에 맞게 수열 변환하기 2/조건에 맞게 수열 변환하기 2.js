function solution(arr) {
    let x;
    for (x = 0; x < arr.length; x++) {
        let arr2 = arr.slice();
        let isEqual = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 50 && arr[i] % 2 === 0) arr[i] /= 2;
            if (arr[i] < 50 && arr[i] % 2 === 1) arr[i] = arr[i] * 2 + 1;
            if (arr[i] !== arr2[i]) {
                isEqual = false;
            }
        }
        if (isEqual) return x;
    }

    return x;
}