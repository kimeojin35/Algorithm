function solution(numlist, n) {
    return numlist.sort((a,b) => {
        const [aGab, bGab] = [Math.abs(a-n), Math.abs(b-n)]
        if(aGab === bGab) return b-a
        return aGab-bGab
    })
}