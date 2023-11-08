function solution(price) {
    let i = 0;
    if (price >= 500000) i = 20;
    else if (price >= 300000) i = 10;
    else if (price >= 100000) i = 5;
    return Math.floor(price - (price * i / 100));
}
