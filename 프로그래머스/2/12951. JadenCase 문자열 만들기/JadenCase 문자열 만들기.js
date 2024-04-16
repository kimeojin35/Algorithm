function solution(s) {
    const arr = s.split(' ').map(i => i.replace(/\w/g,(j,k)=>{
        return k === 0 ? j.toUpperCase() : j.toLowerCase()
    })).join(' ')
    return arr
}