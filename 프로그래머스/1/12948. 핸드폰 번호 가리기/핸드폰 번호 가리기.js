function solution(phone_number) {
    let s = '*';
    return `${s.repeat(phone_number.length - 4)}${phone_number.slice(-4)}`;
}