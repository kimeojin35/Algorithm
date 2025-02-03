function solution(clothes) {
    let answer = 1;
    let num = {}
    clothes.map(([item, type], index) => {
        if (Object.keys(num).includes(type)) num[type] += 1
        else num[type] = 1
    })
    const arr = Object.values(num)
    arr.map(i => answer *= (i + 1))
    return answer - 1;
}