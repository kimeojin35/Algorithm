function solution(num_list) {
    return [num_list.filter((i) => i % 2 == 0).length, num_list.filter((i) => i % 2 == 1).length];
}