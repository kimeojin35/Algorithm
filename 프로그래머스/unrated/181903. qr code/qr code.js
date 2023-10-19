function solution(q, r, code) {
    return code.split("").filter((item, index) => {
        return index % q == r;}).join("");
}