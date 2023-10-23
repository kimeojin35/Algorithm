function solution(array) {
    let max = Math.max.apply(null, array);
    let maxIndex = array.indexOf(max);
    
    return [max, maxIndex];
}