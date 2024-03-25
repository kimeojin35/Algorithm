function solution(s) {
    s = s.toLowerCase().split(" ").map((i) => { return i.split("").map((a, b) => {return b % 2 == 0 ? a.toUpperCase() : a}).join("")}).join(" ");
    return s;
}