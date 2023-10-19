function solution(my_string, letter) {
    return my_string.split("").filter((i) => i != letter).join("");
}