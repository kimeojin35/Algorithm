function solution(price, money, count) {
    let a = 0;
    for (let i = 1; i <= count; i++) {
        a += price * i;
    }
    return a > money ? a-money : 0
}