function solution(arr) {
    const min = Math.min.apply(null, arr);
    console.log(min)
    console.log(arr.filter((i) => i !== min))
    return arr.filter((i) => i !== min).length != 0 ? arr.filter((i) => i !== min) : [-1];
}