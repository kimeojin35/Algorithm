function solution(box, num) {
    let a = Math.floor(box[0] / num);
    let b = Math.floor(box[1] / num);
    let c = Math.floor(box[2] / num);
    return a * b * c;
}