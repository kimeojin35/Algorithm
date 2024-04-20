function solution(s) {
    const arr = [];
    s.split("").map((v, i) => {
        if( !arr.length || arr.at(-1) !== v ) arr.push(v);
        else arr.pop();
    })
  return arr.length ? 0 : 1;
}