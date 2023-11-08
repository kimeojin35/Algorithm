function solution(hp) {
    let answer = 0;
    answer += ((hp - hp % 5) / 5);
    hp -= (hp - hp % 5);
    answer += ((hp - hp % 3) / 3);
    hp -= (hp - hp % 3);
    return answer += hp;
}