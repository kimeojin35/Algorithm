function solution(babbling) {
    const bab = ["aya", "ye", "woo", "ma"]
    var answer = 0;
    babbling.map(b => {
        let i = 0; // 몇번째 글자까지 일치하는지
        let before = -1 // 이전 단어
        while (i < b.length) {
            let n = 0; // 일치하는 단어의 글자수
            let sameWord = false // 이전 단어와 같은지
            for (let j = 0; j < bab.length; j++) { // 발음 가능한 단어들
                if (b.slice(i).startsWith(bab[j])) {
                    if (before == j) sameWord = true
                    else {
                        n = bab[j].length
                        before = j
                    }
                    break
                }
            }
            if (sameWord || n == 0) break
            i += n
        }
        if (i >= b.length) answer++
    })
    return answer;
}