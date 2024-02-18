function solution(arr) {
    const rowLen = arr.length
    const colLen = arr[0].length
    
    if(rowLen > colLen) {
        const gab = Array(rowLen-colLen).fill(0)
        return arr.map(a => [...a, ...gab])
    } 
    
    if(colLen > rowLen) {
        for(let i = 0 ; i < colLen-rowLen ; i ++) {
            const gab = Array(colLen).fill(0)
            arr.push(gab)
        }
    }
    
    return arr
}