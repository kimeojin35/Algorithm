function solution(array, height) {
    return array.filter((i, e)=>i > height).length;
}