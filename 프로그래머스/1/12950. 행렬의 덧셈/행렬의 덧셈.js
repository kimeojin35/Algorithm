function solution(arr1, arr2) {
    var answer = [[]];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            arr1[i][j] += arr2[i][j]
        }
    }
    return arr1;
}