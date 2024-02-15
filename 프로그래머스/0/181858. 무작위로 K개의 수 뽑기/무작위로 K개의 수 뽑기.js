function solution(arr, k) {
    const result = [];
    const set = new Set();
    for (const num of arr) {
        if (!set.has(num)) {
            set.add(num);
            result.push(num);

            if (result.length === k) {
                return result;
            }
        }
    }
    while (result.length < k) {
        result.push(-1);
    }

    return result;
}