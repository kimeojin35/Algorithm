function solution(my_string) {
    return my_string.split("").map((i) => ('a' <= i && i <= 'z') ? i.toUpperCase() : i.toLowerCase()).join("");
}