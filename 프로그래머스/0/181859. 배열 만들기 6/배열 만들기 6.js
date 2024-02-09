function solution(arr) {
    let stk = [];
    arr.map((i) => {
        if (stk == []) stk.push(i);
        else if (stk[stk.length - 1] == i) stk.pop();
        else if (stk[stk.length - 1] != i) stk.push(i);
    })
    return stk.length ? stk : [-1];
}