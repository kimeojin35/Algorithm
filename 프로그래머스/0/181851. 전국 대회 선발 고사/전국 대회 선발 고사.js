function solution(rank, attendance) {
    let arr = []
    rank.unshift(0)
    attendance.unshift(0)
    for(let i=0;i<rank.length;i++) {
        if(rank.indexOf(i) && attendance[rank.indexOf(i)]) {
            arr.push(rank.indexOf(i))
        }
    }

    return (10000*(arr[0]-1)) + (100*(arr[1]-1)) + (arr[2]-1) 
}