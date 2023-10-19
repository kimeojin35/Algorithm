function solution(my_string, queries) {
    my_string = my_string.split("");
    for (let i = 0; i < queries.length; i++) {
        let [s, e] = queries[i];
        while (s < e) {
            [my_string[s], my_string[e]] = [my_string[e], my_string[s]];
            s++, e--;
        }
    }
    return my_string.join("");
}