function solution(num, k) {
    const a = String(num);
    const b = Array.from(a);
    return b.indexOf(`${k}`) == -1 ? -1 : b.indexOf(`${k}`) + 1;
}