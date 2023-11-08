function solution(sides) {
    sides.sort();
    return sides[2] < sides[1] + sides[0] ? 1 : 2;
}